import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
const Billboard = (props) => {
  return (
<<<<<<< HEAD
    <div className="w-full relative group">
      <div className=" relative ">
        <div >
          <img className="w-full h-[250px] object-cover" src={props.img} alt={props.name} />
        </div>
        <div className="max-w-full py-3 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.city}
          </h2>
          {/* Assuming the price is still relevant for the billboard */}
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.locationDescription}</p>
=======
    <div className="w-full relative group cursor-pointer rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="relative">
        <img className="w-full h-[250px] object-cover rounded-t-lg" src={props.img} alt={props.name} />
        <div className="max-w-full py-3 flex flex-col gap-1 border-[1px] border-t-0 px-4 bg-white rounded-b-lg shadow-md">
          <div className="flex items-center justify-between font-titleFont">
            <h2 className="text-lg text-primeColor font-bold">{props.name}</h2>
            <p className="text-[#767676] text-lg">Price: ${props.price}</p>
          </div>
          <div>
            <p className="text-[#767676] text-sm">Location: {props.locationDescription}</p>
          </div>
>>>>>>> 5f71f66ba45a55480cdc60b8b3a9f15c27f215ae
        </div>
        <div className={`gap-2 flex absolute top-1 text-white font-bold pl-3 ${props.availability === "Available" ? "text-green-500" : "text-red-500"}`} ><span>{props.availability}</span></div>
        <div className="absolute bottom-[75px] right-0 px-3 text-white text-sm">Size: <span>{props.size}</span></div>
        <div className="absolute bottom-[50px] right-0 px-3 text-white text-lg font-bold">Price: <span>${props.price}</span></div>
      </div>
<<<<<<< HEAD
        <div className={`gap-2 flex  absolute top-1  font-bold pl-3 ${props.availability == "Unavailable"?"text-red-500":"text-green-500"}`} ><span>{props.availability}</span></div>
        <div className="absolute bottom-[75px] right-0 px-3 text-white">Size: <span>{props.size}</span></div>
        <div className="absolute bottom-[75px] font-bold text-lg  px-3 text-white">Price: <span>{props.price}</span>$</div>
      </div>
     
=======
>>>>>>> 5f71f66ba45a55480cdc60b8b3a9f15c27f215ae
    </div>
  );
};


export default Billboard;
