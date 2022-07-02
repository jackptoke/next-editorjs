import Image from 'next/image';
import { Fragment } from 'react';
import logo from '../../public/kawlah-media3.svg';

const Header = () => {
  return (
    <Fragment>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <Image src={logo} width='160px' />
          </a>
          <nav className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <a className='mr-5 hover:text-gray-900'>ထံလီၢ်ကီၢ်ပူၤတၢ်ကစီၣ်</a>
            <a className='mr-5 hover:text-gray-900'>ထံဂုၤကီၢ်ဂၤတၢ်ကစီၣ်</a>
            <a className='mr-5 hover:text-gray-900'>တၢ်စံၣ်စိၤတဲစိၤ</a>
            <a className='mr-5 hover:text-gray-900'>တၢ်ထံၣ်တၢ်ပာ်ဖျါ</a>
          </nav>
          <button className='inline-flex items-center text-white bg-sky-900 border-0 py-1 px-3 focus:outline-none hover:bg-sky-800 rounded text-base mt-4 md:mt-0'>
            Sign in
          </button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
