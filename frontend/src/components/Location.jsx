import React, { useState } from 'react';
import Locationheader from './Locationheader';
import Path from './path.jsx';
import Products from './Products.jsx';

const Location = () => {
  const [searchproduct, setSearchproducts] = useState(''); 
  console.log(searchproduct);

  return (
    <div>
      <Locationheader setSearchproduct={setSearchproducts} />
      <Path />
      <Products SearchQuery={searchproduct} />
    </div>
  );
};

export default Location;
