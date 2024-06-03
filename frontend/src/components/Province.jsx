import React from 'react';

const Province = () => {
  return (
    <div className='flex sm:flex-row flex-col items-center justify-evenly min-h-[100vh] px-5'>
      <div>
        <span className='text-3xl'>Explore Billboards In All Provinces/States</span><br />
        We have presence all over Pakistan.
      </div>
      <div className='h-[80vh] rounded-lg '>
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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Minar-E-Pakistan_Lights.jpg/1200px-Minar-E-Pakistan_Lights.jpg"
          alt=""
          className='h-full object-cover object-center px-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer'
        />
      </div>
      <div className='h-[80vh] rounded-md'>
        <img
          src="https://wallpapers.com/images/featured/karachi-05x5929jya0yamcv.jpg"
          alt=""
          className='h-full object-cover px-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Province;
