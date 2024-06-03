import React, { useEffect, useState } from 'react';
import Locationheader from './Locationheader';
import Path from './path.jsx';
import Billboradpage from './Billboradpage.jsx';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const Specificlocation = () => {
  const { _id } = useParams();
  const [storebillboards, setstorebillboards] = useState([])
  console.log(storebillboards,"Iam similar cities")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/billboards/city/${_id}`);
       
        setstorebillboards(res.data.billboards)
      } catch (error) {
        console.error('Error fetching province data:', error);
      }
    };
 
    fetchData(); // Call the async function inside useEffect
  }, [_id]);
  const location = useLocation();
  const { state } = location;
  const { product } = state || {};
   console.log(setstorebillboards)
  
  console.log(product,"product")
  return (
    <div>
      <Path back={"Back to search"} props={product} />
      <Billboradpage props={product}/>
    </div>
  );
};

export default Specificlocation;
