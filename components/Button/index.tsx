import { Fragment } from 'react';

const KButton = ({ onClick, buttonText, subText }) => {
  return (
    <Fragment>
      <div className='grid grid-cols-1 gap-1 mx-2'>
        <button
          className='text-white bg-sky-900 border-0 py-1 px-3 focus:outline-none hover:bg-sky-800 rounded text-base mt-4 md:mt-0 text-center'
          onClick={onClick}
        >
          {buttonText}
        </button>
        <span>{subText}</span>
      </div>
    </Fragment>
  );
};

export default KButton;
