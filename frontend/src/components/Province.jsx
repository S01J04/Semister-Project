import React from 'react';

const Province = () => {
  return (
    <div className='flex sm:flex-row flex-col items-center justify-evenly min-h-[100vh] px-5'>
      <div>
        <span className='text-2xl'>Explore Billboards In All Provinces/States</span><br />
        We have presence all over Pakistan.
      </div>
      <div className='h-[80vh] rounded-lg'>
        <img
          src="https://ahgroup-pk.com/blog/wp-content/uploads/2023/08/punjab-provinces-of-pakistan-ahgroup-pk-1024x682.jpg"
          alt=""
          className='h-full object-cover px-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer'
        />
      </div>
      <div className='h-[80vh] rounded-md'>
        <img
          src="https://ahgroup-pk.com/blog/wp-content/uploads/2023/08/khyber-pakhtunkhwa-provinces-of-pakistan-ahgroup-pk.jpg"
          alt=""
          className='h-full object-cover px-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer'
        />
      </div>
      <div className='h-[80vh] rounded-md'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYNBj0py1y0W73gmArPjWSH7FDVQ0ls_pviQx6yTO9_3cTEyIrEcE7w8PTsjaHqw9bsg&usqp=CAU"
          alt=""
          className='h-full object-cover px-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer'
        />
      </div>
      <div className='h-[80vh] rounded-md'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6u48enIR0VqEq0XgDXYPz4ZWhfF7xsRTW0ejLp7j3Sw&s"
          alt=""
          className='h-full object-cover px-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Province;
