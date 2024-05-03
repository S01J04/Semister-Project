import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux";
import { getUser } from '../../redux/userSlice';
const Leftsidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleclick= async()=>{
      
        const res=await axios.post("http://localhost:3000/api/adminpage/adminlogout")
        console.log(res)
        dispatch(getUser(null));
        navigate('/adminlogin');


    }
  return (
    <div className='border flex flex-col border-black w-[20%] gap-6   '>
      <Link className='border border-black p-3 text-lg font-semibold mt-3' to="/admindashboard">Dashboard</Link>
      <Link className='border border-black p-3 text-lg font-semibold' to="/admindashboard/Billboards">Billboards</Link>
      <Link className='border border-black p-3 text-lg font-semibold' to="/admindashboard/Analytics">Analytics</Link>
      <Link className='border border-black p-3 text-lg font-semibold' to="/admindashboard/Campaign">Compaign</Link>
      <Link className='border border-black p-3 text-lg font-semibold' to="/admindashboard/orders">Orders</Link>
      <Link className='border border-black p-3 text-lg font-semibold' to="/admindashboard/users">User</Link>
      <Link className='border border-black p-3 text-lg font-semibold' onClick={handleclick} to="/adminlogin">logout</Link>
    </div>
  )
}

export default Leftsidebar
