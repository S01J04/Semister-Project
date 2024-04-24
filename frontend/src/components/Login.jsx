import React, { useState, useEffect } from 'react';

const Login = () => {

  const [islogin, setislogin] = useState(false);

  return (
    <>
      <div className='flex justify-evenly items-center m-auto h-screen w-[100%]'>
        <div className='text-5xl font-semibold'>
          <span className='text-8xl font-bold'>Shah</span> <br /> Advertizing
        </div>
        <div className='flex flex-col justify-center h-[50%]'>
          <div className='text-7xl font-bold'>Happening now </div>
          <div className="px-7">
            <div className='font-bold text-2xl mt-4'>{islogin ? "Sign In" : "Register"}</div>
            <div className='flex text-lg flex-col'>
              {!islogin && (
                <>
                  <input className='border my-4 w-[70%] rounded-full px-4 py-2' type="text" placeholder='name' /><br />
                  <input className='border w-[70%] rounded-full px-4 py-2' type="text" placeholder='username' /><br />
                </>
              )}
              <input className='border my-4 w-[70%] rounded-full px-4 py-2' type="email" placeholder='email' /><br />
              <input className='border w-[70%] rounded-full px-4 py-2' type="password" placeholder='Password' /><br />
              <button className='border my-4 w-[70%] rounded-full px-4 py-2 bg-blue-700 text-lg font-bold text-white'>{islogin ? "Sign In" : "Register"}</button>
              <div>{islogin ? "Don't have an account" : "Already have an account"} <span className="cursor-pointer font-bold text-blue-600" onClick={() => setislogin(!islogin)}>{islogin ? "Register" : "Sign In"}</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
