import React from "react";
import Product from "./Product";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";

import products from './billboards'


const Products = ({ SearchQuery }) => {
  // Filter products based on the search query
  const filteredProducts = products.filter((product) => {
    const productName = product.city.toLowerCase();
    const query = SearchQuery.toLowerCase();

    // Return true if the product name includes the search query or if the search query is empty
    return productName.includes(query) || !query;
  });

  return (
    <div className=" mx-auto w-[80%] ">
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
          <div className="px-5 py-2 text-white rounded bg-purple-900">
            Save Search
          </div>
        </div>
      </div>

      <div className="grid   md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
        {filteredProducts.map((product, index) => (
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