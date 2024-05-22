import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminUpdate from './AdminUpdate';
import axios from 'axios';

const AdminProduct = (props) => {
    console.log(props)
    const navigate = useNavigate();
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [update, setupdate] = useState(false)

    const toggleDescription = (show) => {
        setShowFullDescription(show);
    };
    const handledelete= async(prop)=>{
        console.log(prop)
        const del=confirm("want to delete the billboard")
        if(del){
            const result= await axios.delete(`http://localhost:3000/api/billboards/delete/${prop}`)
            if(result){
                location. reload()
                console.log("Deleted successfully ",result)
            }
        }
    }

    return (
        <div className="w-full rounded-lg overflow-hidden border-gray-600 shadow-lg shadow-gray-500">
            <div className=" relative">
                <div>
                    <img
                        className="w-full h-[150px] object-cover"
                        src={`http://localhost:3000/${props.img}`}
                        alt={props.name}
                    />
                </div>
                <div className="max-w-full py-3 flex flex-col gap-1 border-[1px]  border-t-0 px-4">
                    <div className="flex items-center justify-between font-titleFont">
                        <h2 className="text-lg text-black font-bold">
                            {props.name}
                        </h2>
                        
                        <p className="text-black text-[14px]">
                            <b>Price:</b> ${props.price}
                        </p>
                    </div>
                    <div>
                         <b>City: {props.city}</b> <br />
                        <b>Description:</b>
                        <p className={`text-black text-sm text-wrap text-[14px] ${showFullDescription ? '' : 'truncate'}`}>
                            {props.locationDescription}
                        </p>
                        {!showFullDescription ? (
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={() => toggleDescription(true)}
                            >
                                See More
                            </button>
                        ) : (
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={() => toggleDescription(false)}
                            >
                                See Less
                            </button>
                        )}
                    </div>
                    {showFullDescription && (
                        <div>
                            <b>Province:</b> {props.province}
                        </div>
                    )}
                    {showFullDescription && (
                        <div className="text-black">
                            <b>Size:</b> <span>{props.size}</span>
                        </div>
                    )}
                    {showFullDescription && (
                        <div className="text-black">
                            <b>Type:</b> <span>{props.type}</span>
                        </div>
                    )}
                    {showFullDescription && (
                        <div className="text-black">
                            <b>Coordinates: <br />longitude</b> <span>{props.location[0]} <br /> <b>latitude: </b>{props.location[1]}</span>
                        </div>
                    )}
                    <div className="flex justify-between">
                        <div
                            onClick={() => setupdate(!update)}
                            className="bg-blue-500 w-20 flex justify-end px-4 py-1 rounded font-semibold cursor-pointer text-white"
                        >
                            Update
                        </div>
                        <div
                            onClick={() => {handledelete(props._id)}}
                            className="bg-blue-500 w-20 flex justify-end px-4 py-1 rounded font-semibold cursor-pointer text-white"
                        >
                            Delete
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
            </div>
            <div className=' absolute top-0 z-10 bg-white  w-[40vw]'>
                {update?<AdminUpdate setupdate={setupdate} update={update}  props={props}/>:""}
            </div>
        </div>
    );
};

export default AdminProduct;
