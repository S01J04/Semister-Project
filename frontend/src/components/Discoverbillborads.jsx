import React from 'react'
import images from "./images";

import CustomSlider from "./custom.slider";

import './styles.css'

const Discoverbillborads = () => {

  
  return (
    <div className='w-full b min-h-[90vh] py-10'>
      <div className=' text-center text-4xl font-extrabold pb-9'>Discover Our Featured Billboards</div>
      <div>
      <div className='w-[100%] '><CustomSlider>
        {images.map((image, index) => {
          return <img key={index} className=' ' src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider></div>
      </div>
    </div>
  )
}

export default Discoverbillborads
