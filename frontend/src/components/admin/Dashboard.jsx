import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Locationheader from '../Locationheader';
import Products from '../Products';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AdminProducts from './AdminProducts';


const Dashboard = () => {
  const { statename } = useParams();
  const [storebillboards, setstorebillboards] = useState([])
  console.log(storebillboards)
  useEffect(() => {
    const fetchData = async () => {
      try {
         const  res = await axios.get(`http://localhost:3000/api/billboards/getall`);
        setstorebillboards(res.data.billboard)
       
      } catch (error) {
        console.error('Error fetching province data:', error);
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []);
  const [searchproduct, setSearchproducts] = useState('');
  const [aavailability, setaavailability] = useState('')
  const [ttype, setttype] = useState('')
  const [ccities, setccities] = useState('')
  const [ssize, setsszie] = useState('')

  return (
    <div className='w-full'>
      <div className=' text-center text-3xl font-semibold border border-black  w-full'>Dashboard</div>
      <div>
      <Locationheader
        setSearchproduct={setSearchproducts}
        setaavailability={setaavailability}
        setttype={setttype}
        setccites={setccities}
        setsszie={setsszie}
        storebillboards={storebillboards}
      />
      <AdminProducts SearchQuery={searchproduct}
       aavailability={aavailability}
        ttype={ttype}
        ccites={ccities}
        storebillboards={storebillboards}
        szie={ssize}/>
    </div>
    
    </div>
  )
}

export default Dashboard
