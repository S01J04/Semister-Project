import React from 'react';
import products from './billboards';
import ReactPlayer from 'react-player';
import Map from "./Maps"


const BillboardPage = ({ props }) => {
  const center = { lat: props.location[0], lng: props.location[1] };
  const zoom = 11;
  console.log(props)
  return (
    <div className="mx-auto  rounded bg-blue-300 w-[80%]  p-4">
      <div className="grid grid-cols-2  bg-grey-200 items-center justify-around bg-white p-2 rounded">
        <div className=" items-center  font-mono font-semibold text-2xl">BillBoard At  {props.locationDescription} {props.city}</div>
        <div className=" items-center text-end">icons</div>
        <div className=" items-center ">Pakistan, {props.province}, {props.city}</div>
        <div className=" items-center text-end ">Rs: {props.price}</div>
      </div>

      <div className="flex w-full  justify-between p-4 bg-white mt-4 rounded">
        <div className="w-[70%] ">
          <div className="w-[100%]">
            <img className="w-full h-full object-cover" src={`http://localhost:3000/${props.img}`} alt="" />
          </div>
          <div className="mt-4 bg-gray-200 p-2 rounded">
            <div className="font-bold">Description</div>
            <div>

              <span>{props.locationDescription}</span> <br />
              <span>Size: {props.size}</span>
            </div>
          </div>
          <div className="mt-4 bg-gray-200 p-2 rounded">
            <div className="font-bold">Details</div>
            <div className="grid grid-cols-2 gap-4">
              <div >
                <div>Billboard ID :  {props._id}</div>

              </div>
              <div >
                <div>Price: {props.price}</div>

              </div>
              <div >
                <div>Billboard Type : {props.type}</div>
                <div></div>
              </div>
              <div >
                <div>Availability : {props.availability}</div>
                <div></div>
              </div>
            </div>

          </div>
          <div className="mt-4 bg-gray-200 p-2 rounded">
            <div className="font-bold">Address</div>
            <div className="grid grid-cols-2  gap-4">
              <div >
                <div>Address</div>
                <div>{props.locationDescription}, {props.city}</div>
              </div>
            </div>

          </div>
          <div className="my-2">View in Map</div>
          <div>
            <Map props={props} center={center} zoom={zoom} />
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
          <div className=" -black p-4 bg-red-200 rounded">
            <div className='text-2xl font-semibold'>Shah Advertizing Pakistan</div>
            <form className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="block w-full  -gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="text" id="phone" placeholder="Your Phone Number" className="block w-full  -gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" placeholder="Your Email Address" className="block w-full  -gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:-blue-500" />
              </div>
              <div className="flex justify-between mt-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Email</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">WhatsApp</button>
              </div>
            </form>
          </div>

        </div>
        <div className="flex flex-col w-[30%] mx-3">
          <div className=" -black p-4 bg-red-200 rounded md:grid-cols-1">
            <div className='text-2xl font-semibold'>Shah Advertizing Pakistan</div>
            <form className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="block w-full  -gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="text" id="phone" placeholder="Your Phone Number" className="block w-full  -gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" placeholder="Your Email Address" className="block w-full  -gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:-blue-500" />
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
                <div className=' rounded px-3 py-2 text-center text-sm text-white   bg-slate-700 mx-3 my-3 flex' key={index}>{item.city}</div>
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