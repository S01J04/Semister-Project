import React from 'react'
import { SignInFour } from './requestform'

const Billboardrequest = () => {
    return (
        <div className='my-10 bg min-h-[100vh] relative  p-[50px] '>
            <div className='justify-between h-[7%] gap-10  flex sm:flex-row flex-col'>
                <div className='grid  grid-cols-1 sm:grid-cols-2 gap-20  w-[60%] '>
                    <div className=' text-5xl font-semibold flex items-center justify-center border-b border-white text-white'>Why Adbuq Is The Perfect Choice?</div>
                    <div className=' text-xl flex flex-col items-center justify-center border-b border-white   text-white'>
                        <span className=' text-3xl font-semibold '>01.Advance Search Engine</span>
                        <div className='flex flex-col items-center justify-center'> You can find right billboards by different search criteria / filters like billboard type, size, cities, price range and more.</div>

                    </div>
                    <div className=' text-xl flex flex-col items-center border-b border-white justify-center  text-white'>
                        <span className=' text-3xl font-semibold '>02. Make Comparison Between Billboards</span>
                        <div className='flex flex-col items-center justify-center'>You can compare your favorite billboards for decision making. Simply add to compare upto three billboards & see the detailed comparison.</div>
                    </div>
                    <div className=' text-xl flex flex-col items-center border-b border-white justify-center  text-white'>
                        <span className=' text-3xl font-semibold '>03.
                            Email Alerts</span>
                        <div className='flex flex-col items-center justify-center'>You can choose a criteria & set email alert. This feature send you email whenever a new billboard matching with your criteria is available.</div>
                    </div>
                </div>
                <div className=''>
                    <SignInFour />
                </div>
            </div>
        </div>
    )
}

export default Billboardrequest
