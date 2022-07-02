import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  useSaveCallback,
  useLoadData,
  options,
  useSetData,
  useClearDataCallback,
} from "../../components/Editor";
import Footer from "../../components/Footer";
import KButton from "../../components/Button";
import { KometaNav } from "../../components/Navs/KometaNav";
import { usePublishCallback } from "../../components/Editor/hooks";
import { KometaFooter } from "../../components/Footer/KometaFooter";

const Editor = dynamic<{
  editorRef: any;
  children?: any;
  data: any;
  options: any;
}>(
  () =>
    import("../../components/Editor/editor").then((mod) => mod.EditorContainer),
  { ssr: false }
);

export default function EditorPage() {
  const [editor, setEditor] = useState(null);

  // save handler
  const onSave = useSaveCallback(editor);

  // load data
  const { data, loading } = useLoadData();

  // set saved data
  useSetData(editor, data);

  const onPublish = usePublishCallback(editor);

  // clear data callback
  const clearData = useClearDataCallback(editor);

  const disabled = editor === null || loading;

  return (
    <div className="min-h-screen bg-zinc-100">
      <Head>
        <title>EditorJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <KometaNav />
        <div className="px-24 mx-auto my-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="my-5 text-xl font-bold">
              ကွဲးတၢ်ဂ့ၢ်လၢကဒုးကူၣ်သ့ထီၣ်ကညီဖိ
            </h1>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-gray-600 text-md"
              >
                တၢ်ကွဲးအခိၣ်တီ
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-1 my-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <Editor editorRef={setEditor} options={options} data={data} />
          </div>
          <div className="flex justify-end mt-6">
            <KButton
              onClick={clearData}
              buttonText="Clear"
              subText={"ထူးသံတၢ်ကွဲး"}
            />
            <KButton
              onClick={onSave}
              buttonText="Save"
              subText={"ပာ်ဃးတၢ်ကွဲး"}
            />
            <KButton
              onClick={onPublish}
              buttonText="Publish"
              subText={"ရၤလီၤတၢ်ကွဲး"}
            />
          </div>
        </div>
        <KometaFooter />
      </main>
      <style jsx>{`
        h1 {
          color: #333333;
          font-weight: bold;
          font-size: large;
        }
      `}</style>
    </div>
  );
}
