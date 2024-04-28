import React from "react";
import Product from "./Product";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import products from "./billboards";

const Products = ({ SearchQuery ,aavailability, ttype , ccites,szie ,storebillboards}) => {
 
  const filteredProducts = storebillboards.filter((product) => {
    const productName = (product.city.name || "").toLowerCase();
    const size = (product.dimensions || "").toLowerCase();
    const price = (product.price )
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
      (!ccites || ccites.toLowerCase() === product.city.name.toLowerCase()) &&
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
          <Product
            key={index}
            _id={product._id}
            img={product.imgpath}
            name={product.name}
            city={product.city.name}
            cityid={product.city._id}
            locationDescription={product.name}
            province={product.province.name}
            availability={product.availability}
            size={product.dimensions}
            price={product.price}
            type={product.type}
            

          />
        ))}
      </div>
    </div>
  );
};

export default Products;
