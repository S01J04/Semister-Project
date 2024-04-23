import React from 'react'

const Contactus = () => {
    return (
        <div className=' contactus  flex items-center justify-center w-[100%]  md:w-full  md:h-[400px] my-10'>
           <div className=' flex flex-col items-center justify-around  md:px-[100px]  h-[90%]'>
           <div className='text-center '>
                <div className='md:text-4xl text-2xl font-bold md:font-semibold pt-5'>Do You Want More Information?</div>
                <div className='md:text-xl text-lg py-3'>Fill up the form here below. Our team will get in touch with you</div>
            </div>
            <div className='md:flex grid grid-cols-2 px-6  md:flex-row gap-5 '>
                <input type="text " className='placeholder:text-gray-600 ' placeholder='Name'/><input type="text" className='placeholder:text-gray-600' placeholder='Email'/><input className='placeholder:text-gray-600' type="text" placeholder='Phone' /> <button className=' md:w-[230px] rounded-lg  bg-blue-700'>Get More Information</button>
            </div>
            <div className=' md:flex md:flex-row grid grid-cols-2 gap-x-10 px-5 mt-5 ml-10 mb-5 w-full md:ustify-between'>
                <div className='font-bold text-md w-60'>You can call our local WhatsApp number to get more information</div>
                <div ><span className='text-green-400 font-bold text-lg'>Canada Office</span> <br /><br />
                    +1(413) 324 8623</div>
                <div ><span className='text-green-400 font-bold text-lg'>UAE Office</span> <br /><br />
                    +971 52943 9737</div>
                <div ><span className='text-green-400 font-bold text-lg'>Pakistan Office</span> <br /><br />
                    +92 331 020 1113</div>
            </div>
           </div>
        </div>
    )
}

export default Contactus
