import React from 'react';

const Ourclients = () => {
  return (
    <div className='min-h-[100vh] flex my-10 flex-col items-center justify-center'>
      <div className='text-3xl my-10'>OUR PARTNERS</div>
      <div className='grid w-[70%] mx-auto gap-10 grid-cols-2 md:grid-cols-4'>
        <div className='h-[130px] bg-transparent cursor-pointer'>
          <img
            src="https://logomak.com/blog/wp-content/uploads/2023/09/Starbucks-logo-500x281-min.png"
            className='h-full w-[130px] object-cover mix-blend-multiply hover:scale-110 transform transition-transform duration-300'
            alt=""
          />
        </div>
        <div className='h-[130px] bg-transparent cursor-pointer'>
          <img
            src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/Adidas.png"
            className='h-full w-[130px] object-cover mix-blend-multiply hover:scale-110 transform transition-transform duration-300'
            alt=""
          />  
        </div>
        <div className='h-[130px] bg-transparent cursor-pointer '>
          <img src="https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2" className='h-full w-[130px] object-cover mix-blend-multiply hover:scale-110 transform transition-transform duration-300' alt="" />
        </div>
        <div className='h-[130px] bg-transparent cursor-pointer'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2hQt7qT87V4gA6rbJoNvrTTLrtyBzZok3lcHKUm10Q&s" className='h-full w-[130px] object-cover mix-blend-multiply hover:scale-110 transform transition-transform duration-300' alt="" />
        </div>
        <div className='h-[130px] bg-transparent cursor-pointer'>
          <img src="https://blog.hubspot.com/hs-fs/hubfs/Pepsi_logo_2014.svg.png?width=450&height=458&name=Pepsi_logo_2014.svg.png" className='h-full w-[130px] object-cover mix-blend-multiply hover:scale-110 transform transition-transform duration-300' alt="" />
        </div>
        <div className='h-[130px] bg-transparent cursor-pointer'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Mzix0aSxiTxIp3BOjfoO-4vT_yurhi7RZJez4oUuyA&s" className='h-full w-[130px] object-cover mix-blend-multiply hover:scale-110 transform transition-transform duration-300' alt="" />
        </div>
        <div className='h-[130px] bg-transparent cursor-pointer '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKt_87C0LELPsF0Q-FoLnghAjlIsfoiphpcP4H3TWHIQ&s" className='h-full w-[130px] object-cover mix-blend-multiply hover:scale-110 transform transition-transform duration-300' alt="" />
        </div>
        <div className='h-[130px] bg-transparent cursor-pointer'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAU28OupNBoVccgfCXa6mu2AVCCMYMevTUHxpTo71JOQ&s" className='h-full w-[130px] object-cover mix-blend-multiply hover:scale-110 transform transition-transform duration-300' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ourclients;
