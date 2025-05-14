import React from "react";
import { useNavigate } from "react-router-dom";

const Billboard = (props) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    // Navigate to the Specificlocation page with product details as props
    console.log(product)
    navigate(`/billboards/${product._id}`, { state: { product } });
  };
 
  return (
    <div className="w-full relative group">
      <div className="relative shadow-lg rounded-md overflow-hidden">
        <img
          className="w-full h-[250px] object-cover"
          src={`http://localhost:3000/${props.img}`}
          alt={props.name}
        />
        <div className="absolute w-full top-0 opacity-30 h-full bg-black"></div>
        <div className="absolute bottom-0 right-0 px-3 text-white">
          Size: <span>{props.size}</span>
        </div>
        <div className="absolute bottom-0 font-bold text-lg px-3 text-white">
          Price: <span>{props.price}</span>
        </div>
      </div>
      <div className="max-w-full py-3 flex flex-col gap-1 border-[1px] border-t-0 px-4 mt-2 bg-white shadow-md rounded-md">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.name}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">
            {props.city}
          </p>
        </div>
        <div>
        <p style={{
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden'
}} className="text-[#767676] text-[14px] ">
  {props.locationDescription}
</p>

</div>

        <div className="flex justify-end">
          <div
            onClick={() => handleClick(props)}
            className="bg-blue-500 w-20 flex justify-end px-4 py-1 rounded font-semibold cursor-pointer text-white"
          >
            Details
          </div>
        </div>
      </div>
      <div
        className={`gap-2 flex absolute top-1 font-bold pl-3  ${
    props.availability === "unavailable" ? "text-red-500" : props.availability === "booked" ? "text-yellow-400" : "text-green-600"
}`}
      >
        <span>{props.availability}</span>
      </div>
    </div>
  );
};

export default Billboard;
