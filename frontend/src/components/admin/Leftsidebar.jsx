import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getUser } from '../../redux/userSlice';

const Leftsidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/adminpage/adminlogout");
            console.log(res);
            dispatch(getUser(null));
            navigate('/adminlogin');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <div className='min-h-[100vh]  bg-gray-800 text-white flex flex-col w-full md:w-[20%] gap-6 py-6 px-3 md:px-6'>
            <Link className='p-3 text-lg font-semibold hover:text-blue-300 rounded-lg' to="/admindashboard">Dashboard</Link>
            <Link className='p-3 text-lg font-semibold hover:text-blue-300 rounded-lg' to="/admindashboard/Billboards">Billboards</Link>
            <Link className='p-3 text-lg font-semibold hover:text-blue-300 rounded-lg' to="/admindashboard/Analytics">Analytics</Link>
            <Link className='p-3 text-lg font-semibold hover:text-blue-300 rounded-lg' to="/admindashboard/Campaign">Campaign</Link>
            <Link className='p-3 text-lg font-semibold hover:text-blue-300 rounded-lg' to="/admindashboard/orders">Orders</Link>
            <Link className='p-3 text-lg font-semibold hover:text-blue-300 rounded-lg' to="/admindashboard/users">User</Link>
            <button onClick={handleLogout} className='p-3 text-lg font-semibold cursor-pointer bg-red-500 hover:bg-red-600 rounded-lg'>Logout</button>
        </div>
    );
};

export default Leftsidebar;
