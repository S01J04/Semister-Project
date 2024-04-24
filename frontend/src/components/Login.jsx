import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [islogin, setislogin] = useState(true)
  return (
    <>
    <div className=' flex justify-evenly items-center m-auto  h-screen  w-[100%]'>
    <div className=''>
      <img className='invert' width="500px" src="https://cdn.vox-cdn.com/thumbor/2zWCoOSHusS46TVjK3T2mnL-jCQ=/0x0:1600x1600/1400x1050/filters:focal(800x800:801x801)/cdn.vox-cdn.com/uploads/chorus_asset/file/24805464/F1x5VdQX0AA9Sgt.jpeg" alt="" />
    </div>
    <div className='flex flex-col justify-center h-[50%]'>
        <div className='text-7xl font-bold'>Happening now </div>
        <div className="px-7"><div className='font-bold text-2xl mt-4'>{!islogin ? "Login":"Register"}</div>
        <div className='flex text-lg  flex-col'>
        <form action="" className=''>
         {islogin ? <><input className=' border my-4 w-[70%] rounded-full px-4 py-2' type="text" placeholder='name' /><br />
         <input className=' border w-[70%] rounded-full px-4 py-2' type="text" placeholder='username' /><br /> </>:""}
        <input className=' border my-4 w-[70%] rounded-full px-4 py-2' type="email" placeholder='email' /><br />
        <input className=' border w-[70%] rounded-full px-4 py-2' type="password" placeholder='Password' /><br />
        <button className=' border my-4 w-[70%] rounded-full px-4 py-2 bg-blue-700 text-lg font-bold  text-white'>{!islogin?"Login":"Register"}</button>
        </form>
        <div>{islogin?"Already have an account":"Dont have account"} <span className=" cursor-pointer font-bold text-blue-600" onClick={()=>setislogin(!islogin)}>{islogin ? "Login":"Register"}</span></div>
        </div></div>
    </div>
    </div></>
  )
}

export default Login
