import React, { useState, useEffect, useRef } from 'react';
import { headerlefticons, headerrighticons } from './icons';
import { IoMdArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { FaRegUserCircle, FaArrowRight } from "react-icons/fa";



import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

const DropdownList = ({ items }) => {
    return (
      <ul className="absolute sm:w-[120%] sm:top-full  top-20 w-[40%] left-[200px] sm:left-0 z-10 bg-gray-200 shadow-lg">
        {items.map((item) => (
          <li key={item} className="px-4 text-start border-b border-gray-300 py-3 text-gray-400 hover:bg-gray-100">
            <a href={`#${item}`} className="text-gray-500 text-sm">
              {item}
            </a>
          </li>
        ))}
      </ul>
    );
  };


export default function Header() {
    const [showCities, setShowCities] = useState(false);
    const [showProvinces, setShowProvinces] = useState(false);
    const menuItems = [
        {
          name: 'Explore Billboards',
          href: '#',
          hover: <ChevronDown className="ml-2 h-4 w-4" />,
          onMouseEnter: () => setShowProvinces(true),
          onMouseLeave: () => setShowProvinces(false),
          items: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Hyderabad', 'Quetta', 'Peshawar', 'Sialkot']
        },
        {
          name: 'BillBoards on Map',
          href: '#',
        },
        {
          name: 'Search by City',
          href: '#',
          hover: <ChevronDown className="ml-2 h-4 w-4" />,
          onMouseEnter: () => setShowCities(true),
          onMouseLeave: () => setShowCities(false),
          items: ['KPK', 'PUNJAB', 'SINDH', 'BALOCHISTAN', 'AZADKASHMIR']
        },
        {
          name: 'About Us',
          href: '#',
        },
        {
          name: 'Contact Us',
          href: '#',
        },
      ];
   

   
    
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
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
                   <div className="right flex"> {headerrighticons.map((item, index) => (
                        <div key={index} className="icon-container px-2 cursor-pointer">
                            {React.createElement(item.icon, {
                                size: item.size,
                                color: item.color
                            })}
                        </div>
                    ))}
                </div>
            </div>
    <div className='relative py-3 border shadow-md shadow-black   flex items-center justify-between px-10 '>
       <div className='flex items-center '>
        <div className='text-xl text-black-600 font-bold mx-5'>Shah Advertizing</div>
        <div>
      <input
        class=" h-10 w-[250px] hidden sm:block outline-none border-none  rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Serach"
      />
    </div>
       </div>
       <div>
       <div class="hidden text-white space-x-2 lg:block">
      <button
        type="button"
        class="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Sign In
      </button>
      <button
        type="button"
        class="rounded-md  px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Log In
      </button>
    </div>
       </div>
    </div>
      <div className=" relative   w-[100%] bg-white">
      <div className="mx-auto   flex h-full  items-center justify-between px-4 ">
      <div className="hidden w-[100vw] h-full items-start sm:flex">
        <ul className="flex items-center h-full justify-center w-full relative">
          {menuItems.map((item) => (
            <li
              onMouseEnter={item.onMouseEnter}
              onMouseLeave={item.onMouseLeave}
              className="w-[190px] relative h-full text-center text-nowrap hover:bg-blue-600 hover:text-white text-black py-4"
              key={item.name}
            >
              <a href={item.href} className="inline-flex items-center text-sm font-semibold">
                {item.name}
                <span className="ml-2">{item.hover}</span>
                {((item.name === 'Explore Billboards' && showProvinces) || (item.name === 'Search by City' && showCities)) && <DropdownList items={item.items} />}
              </a>
            </li>
          ))}
        </ul>
      </div>
        <div className="py-4 absolute bottom-0 sm:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                    <input
        class="flex h-10 w-[250px]    outline-none border-none  rounded-md bg-gray-200 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Serach"
      />
                    </span>
              
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                       onMouseEnter={item.onMouseEnter}
              onMouseLeave={item.onMouseLeave}
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          {item.hover}
                        </span>
                        {((item.name === 'Explore Billboards' && showProvinces) || (item.name === 'Search by City' && showCities)) && <DropdownList items={item.items} />}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <button
                    type="button"
                    className="w-full rounded-md  border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}
