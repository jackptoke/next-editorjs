import { NewsBriefLarge } from "./NewsBriefLarge";

export interface CategoryBriefProps {
  categoryId: string;
  imageUrl: string;
  name: string;
  description: string;
};

export interface ArticleBriefProps {
  articleId: string;
  title: string;
  summary: string;
  imageUrl: string;
}

export const CategoryInBrief = ({ category, articleBriefs }) => {
    return (
      <div className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
        <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
          <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
            <a href="/" aria-label="Item" className="mr-3">
              <div className="flex items-center justify-center w-32 h-32 rounded-full bg-indigo-50">
                <img className="object-cover w-full h-32 text-deep-purple-accent-400" src={ category.imageUrl } alt={ `Image related to ${ category.name }`} />
              </div>
            </a>
            <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
              <span className="inline-block mb-2">{ category.name }</span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </h2>
          </div>
          <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
           { category.description }
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          { articleBriefs.map((article) => <NewsBriefLarge article={ article } />) }  
          </div>
      </div>
    );
  };