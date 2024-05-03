import React, { useEffect } from 'react'
import Leftsidebar from './Leftsidebar'

import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Admin = () => {
    
    const { user, otherUsers } = useSelector(store => store.user);
    const navigate = useNavigate();
  
    useEffect(()=>{
      if (!user) {
        navigate("/adminlogin");
      }
    },[]);
   
  return (
    <div className='w-screen h-screen '>
        <Header/>
       <div className='flex'>
       <Leftsidebar/>
       <Outlet key={location.pathname.includes("/admindashboard")}/>
       </div>
    </div>
  )
}

export default Admin
