import React from "react";
import Product from "./Product";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import products from "./billboards";

const Products = ({ SearchQuery ,aavailability, ttype , ccites,szie }) => {
 
  const filteredProducts = products.filter((product) => {
    const productName = (product.city || "").toLowerCase();
    const locationDescription = (product.locationDescription || "").toLowerCase();
    const availability = (product.availability || "").toLowerCase();
    const size = (product.size || "").toLowerCase();
    const price = (product.price || "").toLowerCase();
    const query = SearchQuery.toLowerCase();

    // Check if the product matches the search query or if the query is empty
    const matchesSearchQuery = query
      ? productName.includes(query) ||
        locationDescription.includes(query) ||
        availability.includes(query) ||
        size.includes(query) ||
        price.includes(query)
      : true;

    // Check if the product matches the selected availability, type, cities, and size
    const matchesSelectedItems =
      (!aavailability || aavailability.toLowerCase() === product.availability.toLowerCase()) &&
      (!ttype || ttype.toLowerCase() === product.type.toLowerCase()) &&
      (!ccites || ccites.toLowerCase() === product.city.toLowerCase()) &&
      (!szie || szie.toLowerCase() === product.size.toLowerCase());

    // Return true if the product matches the search query and all selected items
    return matchesSearchQuery && matchesSelectedItems;
});

  

  
  console.log(filteredProducts)
  

  return (
    <div className="mx-auto w-[80%]">
      <div className="grid grid-cols-2 mt-10 my-4 justify-between items-center ">
        <div className="text-4xl font-bold">Search Results</div>
        <div className="flex justify-end">
          <MdOutlineFormatListBulleted size={25} />
          <MdOutlineFormatListBulleted size={25} />
        </div>
        <div>{filteredProducts.length} Results Found</div>
        <div className="flex gap-4 items-center justify-end">
<<<<<<< HEAD
          <span className="flex items-center gap-2 ">
            Sorted by:{" "}
            <div className="text-gray-400 flex items-center gap-3 ">
              Default Order <LuArrowUpDown />
            </div>
          </span>
          <div className="px-5 py-2 text-white rounded bg-purple-900">Save Search</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
        {filteredProducts.map((product, index) => (
=======
          <span className="flex items-center gap-2 ">Sorted by: <div className="text-gray-400 flex items-center gap-3 ">Default Order <LuArrowUpDown /></div></span>
          <div className='bg-transparent  px-5 py-2 rounded cursor-pointer'>
        <button className="text-white bg-purple-900 rounded px-5 py-2 hover:bg-green-900">Save Search</button>
      </div>
      </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
        {products.map((product, index) => (
>>>>>>> 5f71f66ba45a55480cdc60b8b3a9f15c27f215ae
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
