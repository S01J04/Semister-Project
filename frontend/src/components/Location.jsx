import React, { useState } from 'react';
import Locationheader from './Locationheader';
import Path from './path.jsx';
import Products from './Products.jsx';




const Location = () => {
 
  const [searchproduct, setSearchproducts] = useState('');
  const [aavailability, setaavailability] = useState('')
  const [ttype, setttype] = useState('')
  const [ccities, setccities] = useState('')
  const [ssize, setsszie] = useState('')

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
      <Products SearchQuery={searchproduct}
       aavailability={aavailability}
        ttype={ttype}
        ccites={ccities}
        szie={ssize}/>
    </div>
  );
};

export default Location;
