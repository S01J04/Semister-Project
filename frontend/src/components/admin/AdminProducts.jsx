import React from "react";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import AdminProduct from "./AdminProduct";

const AdminProducts = ({ SearchQuery, aavailability, ttype, ccites, szie, storebillboards }) => {
  const filteredProducts = storebillboards.filter((product) => {
    const productName = (product.name || "").toLowerCase();
    const productCityName = (product.city.name || "").toLowerCase();
    const productSize = (product.dimensions || "").toLowerCase();
    const productPrice = product.price.toString();
    const query = SearchQuery.toLowerCase();

    // Check if the product matches the search query or if the query is empty
    const matchesSearchQuery = query
      ? productName.includes(query) ||
        productCityName.includes(query) ||
        product.availability.toLowerCase().includes(query) ||
        productSize.includes(query) ||
        productPrice.includes(query)
      : true;

    // Check if the product matches the selected availability, type, cities, and size
    const matchesSelectedItems =
      (!aavailability || aavailability.toLowerCase() === product.availability.toLowerCase()) &&
      (!ccites || ccites.toLowerCase() === productCityName) &&
      (!szie || szie.toLowerCase() === productSize) &&
      (!ttype || ttype.toLowerCase() === product.type.toLowerCase());

    // Return true if the product matches the search query and all selected items
    return matchesSearchQuery && matchesSelectedItems;
  });
  console.log(filteredProducts)

  return (
    <div className="mx-auto w-[80%]">
      {/* ... rest of your component */}
      <div className="grid relative md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 pt-5 gap-x-4 gap-y-8">
        {filteredProducts.map((product, index) => (
          <AdminProduct
            key={index}
            _id={product._id}
            img={product.imgpath}
            name={product.name}
            city={product.city}
            locationDescription={product.description} // Changed from product.name to product.description
            province={product.province.name}
            availability={product.availability}
            size={product.dimensions}
            price={product.price}
            type={product.type}
            location={product.location.coordinates}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
