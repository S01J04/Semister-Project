import React from 'react'
import { LuChevronsUpDown } from "react-icons/lu";

const Locationheader = () => {
  return (
    <div className='flex items-center bg-blue-600 gap-x-4 justify-center  py-2'>
    <div>
        <input className='border-none outline-none rounded w-[350px] px-4 py-2' type="text" placeholder='Enter Road or Area Name' />
    </div>
    <div>
        <div className='bg-white py-2 px-7 rounded flex items-center justify-between cursor-pointer'>Availability <div><LuChevronsUpDown /></div></div>
    </div>
    <div className='bg-white py-2 px-4 rounded cursor-pointer'><div >Type</div></div>
    <div className='bg-white py-2 px-7 rounded flex items-center now justify-between cursor-pointer'><div className=''>All cities</div><div  ><LuChevronsUpDown /></div></div>
    <div className='bg-white py-2 px-6 rounded flex items-center justify-between cursor-pointer' ><div>Size</div><div><LuChevronsUpDown /></div></div>
    <div className='bg-transparent border border-white text-white py-2 px-10 rounded cursor-pointer'><button>Search</button></div>
</div>

  )
}

export default Locationheader
