import React from 'react';
import { MdChevronLeft, MdChevronRight, MdHome } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Path = ({back, props}) => {
  const navigate=useNavigate()
  return (
    <div className=' text-sm  items-center mb-5 flex px-5 sm:px-14 w-[700px] '>
      <div>
      <span  onClick={() => navigate(-1)} className='flex items-center cursor-pointer space-x-2'>
      <MdChevronLeft /><span><MdHome color='lightblue'/></span>
        <span onClick={() => navigate(-1)} className='text-blue-500 cursor-pointer'>{back}</span>
      </span>
      </div>
      
      <div>{back=="Home"? <span className='flex text-nowrap items-center space-x-2'>
        <MdChevronRight />
        <span>Search Results</span>

      </span> :<span className='flex text-nowrap items-center space-x-2'>
        <MdChevronRight />
        <span>Search Results</span>
        <MdChevronRight />
        <span>{props.province=="Khyber Pakhtunkhwa"?"KPK":props.province}</span>
        <MdChevronRight />
        <span>{props.city}</span>
        <MdChevronRight />
        <span>{props.name}</span>
      </span>}</div>
    </div>
  );
};

export default Path;
