import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
const Leftsidebar = () => {

    const handleclick= async()=>{
      
        const res=await axios.post("http://localhost:3000/api/adminpage/adminlogout")
        console.log(res)
     


    }
  return (
    <div className='border flex flex-col border-black w-[20%] h-screen '>
      <Link to="/admindashboard">Dashboard</Link>
      <Link to="/admindashboard/Billboards">Billboards</Link>
      <Link to="/admindashboard/Analytics">Compaign</Link>
      <Link to="/admindashboard/Campaign">Analytics</Link>
      <Link onClick={handleclick} to="/adminlogin">logout</Link>
    </div>
  )
}

export default Leftsidebar
