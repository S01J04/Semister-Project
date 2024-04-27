import React, { useState } from 'react';
import { headerlefticons, headerrighticons } from './icons';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const DropdownList = ({ items, setHrefitem }) => {
  return (
    <ul className="absolute sm:w-[120%] sm:top-full top-20 w-[40%] left-[200px] sm:left-0 z-10 bg-gray-200 shadow-lg">
      {items.items.map((item) => (
        <li key={item} onClick={() => setHrefitem(item)} className="px-4 text-start border-b border-gray-300 py-3 text-gray-400 hover:bg-gray-100">
          <Link to={items.href} className="text-gray-500 text-sm"> {item}</Link>
        </li>
      ))}
    </ul>
  );
};

export default function Header() {
  const [showCities, setShowCities] = useState(false);
  const [showProvinces, setShowProvinces] = useState(false);
  const [hrefitem, setHrefitem] = useState('');
  
  const menuItems = [
    {
      name: 'Home',
      href: '/',
      itemstoggle: false
    },
    {
      name: 'Explore Billboards',
      href: `/search-results/${hrefitem}`,
      hover: <ChevronDown className="ml-2 h-4 w-4" />,
      onMouseEnter: () => setShowProvinces(true),
      onMouseLeave: () => setShowProvinces(false),
      items: ['KPK', 'PUNJAB', 'SINDH', 'BALOCHISTAN', 'AZADKASHMIR'],
      itemstoggle: true
    },
    {
      name: 'BillBoards on Map',
      href: '#',
      itemstoggle: false
    },
    {
      name: 'About Us',
      href: '/about',
      itemstoggle: false
    },
    {
      name: 'Contact Us',
      href: '/contact',
      itemstoggle: false
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      <div className='relative py-3 border shadow-md shadow-black flex items-center justify-between px-10 '>
        <div className='flex items-center '>
          <div className='text-xl text-black-600 font-bold mx-5'>Shah Advertizing</div>
          <div>
            <input
              className="h-10 w-[250px] hidden sm:block outline-none border-none rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div>
          <div className="hidden text-white space-x-2 lg:block">
            <Link to={`/login`}>
              <button
                type="button"
                className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign In
              </button>
            </Link>
            <Link to={`/login`}>
              <button
                type="button"
                className="rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-[100%] bg-white">
        <div className="mx-auto flex h-full items-center justify-between px-4 ">
          <div className="hidden w-[100vw] h-full items-start sm:flex">
            <ul className="flex items-center h-full justify-center w-full relative">
              {menuItems.map((item) => (
                item.itemstoggle ?(
                  <li
                    onMouseEnter={item.onMouseEnter}
                    onMouseLeave={item.onMouseLeave}
                    className="w-[190px] relative h-full inline-flex justify-center items-center text-sm font-semibold text-center text-nowrap hover:bg-blue-600 hover:text-white text-black py-4"
                    key={item.name}
                  >
                    {item.name}
                    <span className="ml-2">{item.hover}</span>
                    {((item.name === 'Explore Billboards' && showProvinces) || (item.name === 'Search by City' && showCities)) && <DropdownList items={item} setHrefitem={setHrefitem} />}
                  </li>
                ):(<Link to={item.href}>
                  <li
                    onMouseEnter={item.onMouseEnter}
                    onMouseLeave={item.onMouseLeave}
                    className="w-[190px] relative h-full inline-flex justify-center items-center text-sm font-semibold text-center text-nowrap hover:bg-blue-600 hover:text-white text-black py-4"
                    key={item.name}
                  >
                    {item.name}
                  </li>
                </Link>)
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
                          className="flex h-10 w-[250px]    outline-none border-none  rounded-md bg-gray-200 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Search"
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
                        item.itemstoggle && (
                          <li
                            onMouseEnter={item.onMouseEnter}
                            onMouseLeave={item.onMouseLeave}
                            className="w-[190px] relative h-full inline-flex justify-center items-center text-sm font-semibold text-center text-nowrap hover:bg-blue-600 hover:text-white text-black py-4"
                            key={item.name}
                          >
                            {item.name}
                            <span className="ml-2">{item.hover}</span>
                            {((item.name === 'Explore Billboards' && showProvinces) || (item.name === 'Search by City' && showCities)) && <DropdownList items={item.items} setHrefitem={setHrefitem} />}
                          </li>
                        )
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
  );
}
