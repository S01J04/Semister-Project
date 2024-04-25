import React from "react";
import Product from "./Product";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";

const products = [
  {
    _id: "100001",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU28A74XwcSE3m1feCtdbfczxnZJgJQRbiikvij8f0PVz9ySv3k0IlQVoqjclHOMiUtCs&usqp=CAU?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 1",
    city: "New York",
    locationDescription: "Times Square",
    availability: "Available",
    size: "20x10",
    price: 45
  },
  {
    _id: "100002",
    img: "https://c8.alamy.com/comp/C4E8P4/billboards-in-lahore-C4E8P4.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 2",
    city: "Los Angeles",
    locationDescription: "Hollywood Blvd",
    availability: "Unavailable",
    size: "15x10",
    price: 45
  },
  {
    _id: "100003",
    img: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/images/print-edition/20180324_ASP001_0.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 3",
    city: "Chicago",
    locationDescription: "Michigan Ave",
    availability: "Available",
    size: "25x15",
    price: 45
  },{
    _id: "100002",
    img: "https://c8.alamy.com/comp/C4E8P4/billboards-in-lahore-C4E8P4.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 2",
    city: "Los Angeles",
    locationDescription: "Hollywood Blvd",
    availability: "Unavailable",
    size: "15x10",
    price: 45
  },
  {
    _id: "100003",
    img: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/images/print-edition/20180324_ASP001_0.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 3",
    city: "Chicago",
    locationDescription: "Michigan Ave",
    availability: "Available",
    size: "25x15",
    price: 45
  },
  {
    _id: "100004",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkO6PxWQG_J6N0WJllycB10eo5pBZxPv4fBu8Fe3_OFdREUKAMaHFMj2yfyo8rZyU5DC0&usqp=CAU?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 4",
    city: "San Francisco",
    locationDescription: "Union Square",
    availability: "Unavailable",
    size: "18x12",
    price: 45
  },
  {
    _id: "100005",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTsz7_ByW0VyvmtBama3Fjp4pyCgmfsf0Qvge75q-rqgS-8ist8Y_Fh44mWvmwAJV53E&usqp=CAU?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 5",
    city: "Miami",
    locationDescription: "South Beach",
    availability: "Available",
    size: "22x8",
    price: 45
  },
  {
    _id: "100001",
    img: "https://c8.alamy.com/comp/C4E8NG/billboards-in-lahore-C4E8NG.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 1",
    city: "New York",
    locationDescription: "Times Square",
    availability: "Available",
    size: "20x10",
    price: 45
  },
  {
    _id: "100002",
    img: "https://c8.alamy.com/comp/C4E8P4/billboards-in-lahore-C4E8P4.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 2",
    city: "Los Angeles",
    locationDescription: "Hollywood Blvd",
    availability: "Unavailable",
    size: "15x10",
    price: 45
  },
  {
    _id: "100003",
    img: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/images/print-edition/20180324_ASP001_0.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 3",
    city: "Chicago",
    locationDescription: "Michigan Ave",
    availability: "Available",
    size: "25x15",
    price: 45
  },
  {
    _id: "100004",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkO6PxWQG_J6N0WJllycB10eo5pBZxPv4fBu8Fe3_OFdREUKAMaHFMj2yfyo8rZyU5DC0&usqp=CAU?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 4",
    city: "San Francisco",
    locationDescription: "Union Square",
    availability: "Unavailable",
    size: "18x12",
    price: 45
  },
  {
    _id: "100005",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTsz7_ByW0VyvmtBama3Fjp4pyCgmfsf0Qvge75q-rqgS-8ist8Y_Fh44mWvmwAJV53E&usqp=CAU?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Billboard 5",
    city: "Miami",
    locationDescription: "South Beach",
    availability: "Available",
    size: "22x8",
    price: 45
  },
  // Repeat as needed
];


const Products = () => {
  return (
    <div className=" mx-auto w-[80%] ">
      <div className="grid grid-cols-2 mt-10 my-4 justify-between items-center ">
        <div className="text-4xl font-bold">Search Results</div>
        <div className="flex justify-end"><MdOutlineFormatListBulleted size={25} /><MdOutlineFormatListBulleted size={25} /></div>
        <div>2402 Results Found</div>
        <div className="flex gap-4 items-center justify-end">
          <span className="flex items-center gap-2 ">Sorted by: <div className="text-gray-400 flex items-center gap-3 ">Default Order <LuArrowUpDown /></div></span>
          <div className='bg-transparent  px-5 py-2 rounded cursor-pointer'>
        <button className="text-white bg-purple-900 rounded px-5 py-2 hover:bg-green-900">Save Search</button>
      </div>
      </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
        {products.map((product, index) => (
          <Product
            key={index}
            _id={product._id}
            img={product.img}
            name={product.name}
            city={product.city}
            locationDescription={product.locationDescription}
            availability={product.availability}
            size={product.size}
            price={product.price}
          />

        ))}
      </div>
    </div>
  );
};

export default Products;