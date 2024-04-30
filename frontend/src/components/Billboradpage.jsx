import React from 'react';
import products from './billboards';
import ReactPlayer from 'react-player';

const BillboardPage = ({ props }) => {
  return (
    <div className="mx-auto border rounded bg-blue-300 w-[80%]  p-4">
      <div className="grid grid-cols-2 border bg-grey-200 items-center justify-around bg-white p-2 rounded">
        <div className="border items-center  font-mono font-semibold text-2xl">BillBoard At {props.city}</div>
        <div className="border items-center text-end">icons</div>
        <div className="border items-center ">Pakistan, KPK, {props.city}</div>
        <div className="border items-center text-end ">Rs{props.price}</div>
      </div>

      <div className="flex w-full border justify-between p-4 bg-white mt-4 rounded">
        <div className="w-[70%] ">
          <div className="w-[100%]">
            <img className="w-full h-full" src={props.img} alt="" />
          </div>
          <div className="mt-4 bg-gray-200 p-2 rounded">
            <div className="font-bold">Description</div>
            <div>
              {props.locationDescription}
              <br />
              TCT: All Over Pakistan
              <br />
              TGT: Kalam
            </div>
          </div>
          <div className="mt-4 bg-gray-200 p-2 rounded">
            <div className="font-bold">Details</div>
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index}>
                  <div>Billboard ID</div>
                  <div>42957</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-gray-200 p-2 rounded">
            <div className="font-bold">Address</div>
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <div>Address</div>
                  <div>{props.locationDescription}, {props.city}</div>
                </div>
              ))}
            </div>
            <div className="mt-2">Integrate Google Maps here</div>
          </div>
          <div className="mt-4 p-2 rounded">
            <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] mx-auto mt-2">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=N6v7HQiCNiQ`}
                controls
                width="100%"
                height="100%"
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            </div>
          </div>
          <div className="border border-black p-4 bg-red-200 rounded">
    <div className='text-2xl font-semibold'>Shah Advertizing Pakistan</div>
    <form className="mt-4">
        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="text" id="phone" placeholder="Your Phone Number" className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" placeholder="Your Email Address" className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="flex justify-between mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Email</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">WhatsApp</button>
        </div>
    </form>
          </div>

        </div>
        <div className="flex flex-col w-[30%] mx-3">
        <div className="border border-black p-4 bg-red-200 rounded md:grid-cols-1">
    <div className='text-2xl font-semibold'>Shah Advertizing Pakistan</div>
    <form className="mt-4">
        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="text" id="phone" placeholder="Your Phone Number" className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" placeholder="Your Email Address" className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="flex justify-between mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Email</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">WhatsApp</button>
        </div>
    </form>
</div>
        
          <div className="mt-4 flex flex-col bg-gray-200 p-4 rounded">
            <p className="text-2xl ">We Have Billboards in:</p>
            <ul>
              {products.map((item, index) => (
                <div className=' rounded px-3 py-2 text-center text-sm text-white border  bg-slate-700 mx-3 my-3 flex' key={index}>{item.city}</div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-red-100 p-4 rounded space">
        STANDARD TERMS & CONDITIONS:
        <ol className="list-decimal list-inside pl-4 pt-2 space-y-3">
          <li>Taxes are not included in prices.</li>
          <li>Your rent will begin from the booking time.</li>
          <li>50% rent must be paid in advance and 50% after display.</li>
          <li>Any loss to the skin i.e. damage to the skin due to bad weather or theft of the skin will not be beared by the company.</li>
          <li>Billboards will be available from the dates mentioned subject to the condition that our existing client does not extend</li>
        </ol>
      </div>
    </div>
  )
}
export default BillboardPage