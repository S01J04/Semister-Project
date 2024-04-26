// Billboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Billboard = (props) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    // Navigate to the Specificlocation page with product details as props
    navigate("/specificlocation", { state: { product } });
  };

  return (
    <div className="w-full relative group">
      <div className=" relative ">
        <div>
          <img
            className="w-full h-[250px] object-cover"
            src={props.img}
            alt={props.name}
          />
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
            <p className="text-[#767676] text-[14px]">
              {props.locationDescription}
            </p>
          </div>
          <div className="flex justify-end">
            {/* Pass product to handleClick */}
            <div
              onClick={() => handleClick(props)}
              className="bg-blue-500 w-20 flex justify-end px-4 py-1 rounded font-semibold cursor-pointer text-white"
            >
              Details
            </div>
          </div>
        </div>
        <div
          className={`gap-2 flex absolute top-1 font-bold pl-3 ${
            props.availability == "Unavailable" ? "text-red-500" : "text-green-500"
          }`}
        >
          <span>{props.availability}</span>
        </div>
        <div className="absolute bottom-[110px] right-0 px-3 text-white">
          Size: <span>{props.size}</span>
        </div>
        <div className="absolute bottom-[110px] font-bold text-lg px-3 text-white">
          Price: <span>{props.price}</span>$
        </div>
      </div>
    </div>
  );
};

export default Billboard;
