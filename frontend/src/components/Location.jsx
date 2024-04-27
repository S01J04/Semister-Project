import React, { useEffect, useState } from 'react';
import Locationheader from './Locationheader';
import Path from './path.jsx';
import Products from './Products.jsx';
import axios from "axios"
import { useParams } from 'react-router-dom';



const Location = () => {
  const { statename } = useParams();
  const [storebillboards, setstorebillboards] = useState([])
  console.log(storebillboards)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/billboards/province/${statename}`);
       
        setstorebillboards(res.data.billboard)
      } catch (error) {
        console.error('Error fetching province data:', error);
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, [statename]);
   
 


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
