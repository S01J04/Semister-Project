import React, { useState } from 'react';
import Locationheader from './Locationheader';
import Path from './path.jsx';
import Billboradpage from './Billboradpage.jsx';
import { useLocation } from 'react-router-dom';

const Specificlocation = () => {
  const location = useLocation();
  const { state } = location;
  const { product } = state || {};

  const [searchproduct, setSearchproducts] = useState('');
  const [aavailability, setaavailability] = useState('');
  const [ttype, setttype] = useState('');
  const [ccities, setccities] = useState('');
  const [ssize, setsszie] = useState('');
  console.log(state)
  // You can use the product details here in your component

  return (
    <div>
      <Locationheader
        setSearchproduct={setSearchproducts}
        setaavailability={setaavailability}
        setttype={setttype}
        setccites={setccities}
        setsszie={setsszie}
      />
      <Path />
      <Billboradpage props={product}/>
    </div>
  );
};

export default Specificlocation;
