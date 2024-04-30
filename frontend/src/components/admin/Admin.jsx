import React from 'react'
import Leftsidebar from './Leftsidebar'

import { Outlet } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'

const Admin = () => {
    
   
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
