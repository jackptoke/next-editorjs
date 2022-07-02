import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Image from "@editorjs/image";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
// import Warning from '@editorjs/warning';
// import Code from '@editorjs/code';
import LinkTool from "@editorjs/link";
// import Raw from '@editorjs/raw';
// import Quote from '@editorjs/quote';
// import Marker from '@editorjs/marker';
// import InlineCode from '@editorjs/inline-code';
// import SimpleImage from '@editorjs/simple-image';

import {
  uploadFileToFirstore,
  uploadFileUrlToFirestore,
} from "../../utilities/firebase/FirebaseStorage";

export const tools = {
  header: {
    class: Header,
    inlineToolbar: ["link"],
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  embed: {
    class: Embed,
    // inlineToolbar: true,
    config: {
      services: {
        youtube: {
          regex:
            /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
          embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
          html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
          height: 320,
          width: 580,
          id: ([id, params]) => {
            if (!params && id) {
              return id;
            }

            const paramsMap = {
              start: "start",
              end: "end",
              t: "start",
              // eslint-disable-next-line camelcase
              time_continue: "start",
              list: "list",
            };

            params = params
              .slice(1)
              .split("&")
              .map((param) => {
                const [name, value] = param.split("=");

                if (!id && name === "v") {
                  id = value;

                  return null;
                }

                if (!paramsMap[name]) {
                  return null;
                }

                return `${paramsMap[name]}=${value}`;
              })
              .filter((param) => !!param);

            return id + "?" + params.join("&");
          },
          facebook: {
            regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
            embedUrl:
              "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
            html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
            id: (ids) => {
              return ids.join("/");
            },
          },
        },
      },
    },
  },
  table: Table,
  // warning: Warning,
  // code: Code,
  // linkTool: {
  //   class: LinkTool,
  //   config: {
  //     endpoint: 'https://jsonlink.io/api/extract?',
  //   },
  // },
  image: {
    class: Image,
    config: {
      uploader: {
        async uploadByFile(file) {
          const result = await uploadFileToFirstore(file);
          console.log("[uploadByFile EditorJS] ", result);

          return result;
        },
        async uploadByUrl(url) {
          const result = await uploadFileUrlToFirestore(url);
          console.log("[uploadByUrl EditorJS] ", result);
          return result;
        },
      },
      // endpoints: {
      //   byFile: 'gs://kawthoolei-b1e74.appspot.com/',
      //   byUrl: 'gs://kawthoolei-b1e74.appspot.com/',
      // },
      captionPlaceholder: "ကွဲးဘၣ်ဃးတၢ်ဂီၤအဂ့ၢ်တဆံးတက့ၢ်",
    },
  },
  // raw: Raw,
  // quote: Quote,
  // marker: Marker,
  // checklist: CheckList,
  delimiter: Delimiter,
  // inlineCode: InlineCode,
  // simpleImage: SimpleImage,
};
