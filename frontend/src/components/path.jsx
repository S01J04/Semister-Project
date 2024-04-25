import React from 'react';
import { MdChevronLeft, MdChevronRight, MdHome } from "react-icons/md";

const Path = () => {
  return (
    <div className='flex items-center my-3 justify-between flex-nowrap px-5 sm:px-14 w-[400px] '>
      <span className='flex items-center space-x-2'>
        <MdChevronLeft />
        <span className='text-blue-500'>Back to Search</span>
      </span>
      <span><MdHome color='lightblue'/></span>
      <span className='flex items-center space-x-2'>
        <MdChevronRight />
        <span>Search Results</span>
      </span>
    </div>
  );
};

export default Path;
