import React, { useState } from 'react';
import { LuChevronsUpDown } from "react-icons/lu";
import products from './billboards';

const Locationheader = ({ setSearchproduct ,setaavailability,setttype,setccites,setsszie,storebillboards }) => {
  const [availability, setAvailability] = useState(false);
  const [type, setType] = useState(false);
  const [cities, setCities] = useState(false);
  const [size, setSize] = useState(false);
  const [selectedItemss, setSelectedItemss] = useState({
    Availability: null,
    Type: null,
    AllCities: null,
    Size: null
  });
 

  const city = storebillboards.map((item, index) => {
    return item.city.name;
  });

  const menuItems = [
    {
      name: 'Availability',
      hover: <LuChevronsUpDown />,
      toggleState: availability,
      setToggleState: setAvailability,
      items: ['Available', 'Unavailable', "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    {
      name: 'Type',
      hover: <LuChevronsUpDown />,
      toggleState: type,
      setToggleState: setType,
      items: ["Billboards", "Digital Displays", "Transit Ads", "Street Furniture Ads", "Mobile Billboards", "Interactive Kiosks", "Airport Ads", "Subway Ads", "Bus Stop Ads", "Train Station Ads", "Taxi Ads", "Guerilla Marketing", "Event Sponsorships", "Online Ads", "TV and Radio Ads"]
    },
    {
      name: 'AllCities',
      hover: <LuChevronsUpDown />,
      toggleState: cities,
      setToggleState: setCities,
      items: city
    },
    {
      name: 'Size',
      hover: <LuChevronsUpDown />,
      toggleState: size,
      setToggleState: setSize,
      items: ["10x5", "12x6", "15x7", "20x10", "25x12", "30x15", "40x20", "50x25", "60x30", "70x35", "80x40", "90x45", "100x50"]
    },
  ];

  const DropdownList = ({ items ,itemname}) => {
    const selectItem = (item) => {
      setSelectedItemss(prevState => ({
        ...prevState,
        [itemname]: item
      }));
    };

    return (
      <ul className="absolute sm:w-[120%] sm:top-full top-20 w-[40%] left-[200px] sm:left-0 z-10 bg-gray-200 shadow-lg">
        {items.map((item) => (
          <li onClick={() => selectItem(item)} key={item} className="px-4 text-start border-b cursor-pointer border-gray-300 py-3 text-gray-400 hover:bg-gray-100">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const [searchQuery, setSearchQuery] = useState('');

  const clickHandle = () => {
    setSearchproduct(searchQuery);
    setaavailability(selectedItemss.Availability)
    setttype(selectedItemss.Type)
    setccites(selectedItemss.AllCities)
    setsszie(selectedItemss.Size)
    setSearchQuery('')
    setSelectedItemss({
      Availability: null,
      Type : null,
      AllCities : null,
      Size : null
    })
   
  };

  return (
    <div className='flex items-center bg-blue-600 gap-x-4 justify-center py-2'>
      <div>
        <input
          className='border-none outline-none rounded w-[350px] px-4 py-2'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder='Enter Road or Area Name'
        />
      </div>
      <ul className="flex gap-4 items-center h-full justify-center   relative">
        {menuItems.map((item) => (
          <li
            onMouseEnter={() => item.setToggleState(true)}
            onMouseLeave={() => item.setToggleState(false)}
            className="w-[120px] relative  inline-flex justify-center items-center text-sm font-semibold text-center text-nowrap  text-white border rounded py-2"
            key={item.name}
          >
{selectedItemss[item.name] ? selectedItemss[item.name] : item.name}

            <span className="ml-2">{item.hover}</span>
            {(item.toggleState) && <DropdownList items={item.items} itemname={item.name} />}
          </li>
        ))}
      </ul>
      <div onClick={clickHandle} className='bg-transparent border border-white text-white py-2 px-10 rounded cursor-pointer'>
        <button >Search</button>
      </div>
    </div>
  );
};

export default Locationheader;
