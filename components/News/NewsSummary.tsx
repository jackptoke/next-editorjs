import { url } from "inspector";
import { Fragment } from "react";

export const NewsSummary = ({ imageUrl, title, summary }) => {


  return (
    <Fragment>
      <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
        <div className="mr-4">
          <div className="flex items-center justify-center w-full mb-4 rounded-md h-36 sm:w-36" >
            <img src={ `${imageUrl}`} className="object-cover w-full bg-center h-36" />
          </div>
        </div>
        <div>
          <h6 className="mb-3 text-xl font-bold leading-5">{title}</h6>
          <p className="mb-3 text-sm text-gray-900 text-ellipsis">{summary}</p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            ဖးအါထီၣ်
          </a>
        </div>
      </div>
    </Fragment>
  );
};