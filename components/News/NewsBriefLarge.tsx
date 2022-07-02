import { Fragment } from "react"

export const NewsBriefLarge = ({ article }) => {
    return (
        <Fragment>
            <div>
            <img
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src={ article.imageUrl }
              alt=""
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              { article.title }
            </p>
            <p className="text-gray-700">
              { article.summary }
            </p>
            </div>
        </Fragment>
    )
}