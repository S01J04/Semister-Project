import React from 'react';
import { MdChevronLeft, MdChevronRight, MdHome } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Path = ({back}) => {
  const navigate=useNavigate()
  return (
    <div className='flex items-center my-3 justify-between flex-nowrap px-5 sm:px-14 w-[400px] '>
      <span  onClick={() => navigate(-1)} className='flex items-center cursor-pointer space-x-2'>
      <MdChevronLeft /><span><MdHome color='lightblue'/></span>
        <span onClick={() => navigate(-1)} className='text-blue-500 cursor-pointer'>{back}</span>
      </span>
      
      {back=="Home"? <span></span> :<span className='flex items-center space-x-2'>
        <MdChevronRight />
        <span>Search Results</span>
      </span>}
    </div>
  );
};

export default Path;
