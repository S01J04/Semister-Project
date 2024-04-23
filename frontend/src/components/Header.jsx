import React, { useState, useEffect, useRef } from 'react';
import { headerlefticons, headerrighticons } from './icons';
import { IoMdArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { FaRegUserCircle, FaArrowRight } from "react-icons/fa";

const Header = () => {
    const [showCities, setShowCities] = useState(false);
    const [showmenu, setShowmenu] = useState(false);
    const [showregistry, setShowregistry] = useState(false);

    const menuRef = useRef(null);
    const registryRef = useRef(null);

    const cityNames = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Hyderabad', 'Quetta', 'Peshawar', 'Sialkot'];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && registryRef.current && !registryRef.current.contains(event.target)) {
                setShowmenu(false);
                setShowregistry(false);
            }
        };

        if (showmenu || showregistry) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showmenu, showregistry]);

    return (
        <>
            <div className="relative transition-transform duration-300 ease-in-out transform ">
                <div className="firstheader bg-blue-800 h-[30px] flex justify-between px-9 items-center text-white font-semibold">
                    <div className="left flex">
                        <div className="header-left-icons flex">
                            {headerlefticons.map((item, index) => (
                                <div key={index} className='flex mx-3 items-center'>
                                    {React.createElement(item.icon, {
                                        size: item.size,
                                        color: item.color
                                    })}
                                    <span className='px-2 hidden md:block cursor-pointer'>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right flex">
                        {headerrighticons.map((item, index) => (
                            <div key={index} className="icon-container px-2 cursor-pointer">
                                {React.createElement(item.icon, {
                                    size: item.size,
                                    color: item.color
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" z-10 secondheader flex h-[79px] items-center md:justify-evenly justify-between px-5 md:px-0">
                    <div className='block md:hidden cursor-pointer' onClick={() => setShowmenu(!showmenu)}>
                        <IoIosMenu size={25} />
                    </div>
                    <div className='text-4xl font-bold cursor-pointer'>AdBuq</div>
                    <div ref={menuRef} className={`${showmenu ? 'absolute h-screen text-md font-bold text-gray-600 bg-slate-100 left-0 block top-0 px-5 py-5 w-[270px] border ' : 'relative left-[-150]  md:flex flex text-md justify-evenly w-[60%]'}`} style={{ zIndex: 60 }}>
                        <div className='flex m items-center relative' onMouseEnter={() => setShowCities(true)} onMouseLeave={() => setShowCities(false)}>
                            <div className={`${showmenu ? 'flex items-center relative py-3 border-b-2 cursor-pointer' : 'cursor-pointer flex items-center relative'}`}> EXPLORE BILLBOARDS <span className='p-1'>{showmenu ? <FaArrowRight size={15} /> : <IoMdArrowDown />}</span></div>
                            {showCities && (
                                <div style={{ zIndex: 65 }} className={`${showmenu ? 'absolute top-0 left-[140%] transform -translate-x-1/2' : ' absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow'}`}>
                                    {cityNames.map((city, index) => (
                                        <div key={index} className='border-b-2 cursor-pointer hover:bg-slate-300 border-gray-300 w-[180px]  text-lg px-3 bg-gray-100 py-2'>{city}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className={`${showmenu ? 'py-3 border-b-2 cursor-pointer' : 'cursor-pointer'}`}>BILLBOARDS ON MAP</div>
                        <div className={`${showmenu ? 'py-3 border-b-2 flex items-center cursor-pointer' : 'cursor-pointer flex items-centerborder'}`}>TOOLS <span className='p-1'>{showmenu ? <FaArrowRight size={15} /> : <IoMdArrowDown />}</span></div>
                        <div className={`${showmenu ? 'py-3 border-b-2 cursor-pointer' : 'cursor-pointer'}`}>CONTACT US</div>
                        <div className={`${showmenu ? 'py-3 border-b-2 cursor-pointer' : 'cursor-pointer'}`}>ABOUT US</div>
                    </div>
                    <div className='block md:hidden cursor-pointer' ref={registryRef} onClick={()=>setShowregistry(!showregistry)}>
                        <FaRegUserCircle size={25} color='purple' />
                    </div>
                    <div className={`${showregistry?'absolute h-screen text-md font-bold text-gray-600 bg-slate-100 right-0 block top-0 px-5 py-5 w-[270px] border border-black':'text-gray-500  md:flex flex text-sm'}`} style={{ zIndex: 60 }}>
                        <div className={`${showregistry?'Register py-3 border-b-4 cursor-pointer':'px-2 cursor-pointer'}`}>
                            LOGIN
                        </div>
                        <div className={`${showregistry?'Register py-3 border-b-4 cursor-pointer':'px-2 cursor-pointer'}`}>
                            REGISTER
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
