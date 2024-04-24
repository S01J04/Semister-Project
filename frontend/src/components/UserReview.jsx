import React from 'react';
import reviews from './reviews';

const UserReview = () => {
  return (
    <div className='min-h-screen border p-4 bg-white'>
      <h3 className='text-3xl mb-5 mt-5 text-center'>TRUSTED BY PEOPLE</h3>
      <p className='text-center mb-5 text-sm'>People like you are amplifying their brands through our billboards</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {reviews.map((review) => (
          <div
            key={review.id}
            className='bg-pink-100 shadow-md p-4 rounded-lg hover:bg-pink-200 transition duration-300 cursor-pointer'
          >
            <img
              src={review.imageUrl}
              alt={review.name}
              className='w-32 h-32 rounded-full mx-auto mb-4 object-cover'
              // Increased width and height from w-20 and h-20 to w-32 and h-32
            />
            <div className='text-center'>
              <p className='text-3xl font-bold'>{review.name}</p>
              <p className='text-gray-500 text-lg'>{review.date}</p>
              <p className='text-yellow-500 text-lg'>{`${review.rating}/5`}</p>
              <p className='mt-2 text-sm'>{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
