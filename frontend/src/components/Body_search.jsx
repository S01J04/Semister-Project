import React, { useEffect, useRef, useState } from 'react'
import { RiExpandUpDownFill } from "react-icons/ri"; import { GrRadialSelected } from "react-icons/gr";

const DropdownList = ({ items, onSelect }) => {
  return (
    <ul className="absolute w-[100%] top-full left-0 z-10 bg-gray-200 shadow-lg">
      {items.map((item) => (
        <li 
          onClick={() => onSelect(item)} 
          key={item} 
          className="px-4 text-start border-b border-gray-300 py-3 text-gray-400 hover:bg-gray-100"
        >
          <a href={`#${item}`} className="text-gray-500 text-sm">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Body_search = () => {

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowtype(false);
        setShowprice(false);
        setShowlocation(false);
        setShowsize(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isItemSelected = (itemId) => {
    return selectedItems.includes(itemId);
  };
  const [selectedItems, setSelectedItems] = useState({
  });
  const [showtype, setShowtype] = useState(false);
  const [showprice, setShowprice] = useState(false);
  const [showlocation, setShowlocation] = useState(false);
  const [showsize, setShowsize] = useState(false);
  const items = [
    {
      name: "Looking For",
      placeholder: "Select Type",
      onClick: () => setShowtype(!showtype),
      items: ['Billboard', 'Digital Board', 'Hoardings', 'Transit Shelters', 'Wall Murals']
    },
    {
      name: "Maximum Price",
      placeholder: "Max Price(Opt)",
      onClick: () => setShowprice(!showprice),
      items: ['Below 10k', '10k - 20k', '20k - 30k', '30k - 40k', 'Above 40k']
    },
    {
      name: "Location",
      placeholder: "Select City",
      onClick: () => setShowlocation(!showlocation),
      items: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Hyderabad', 'Quetta', 'Peshawar', 'Sialkot']
    },
    {
      name: "Billboard Size",
      placeholder: "Select size(Opt)",
      onClick: () => setShowsize(!showsize),
      items: ['Small', 'Medium', 'Large', 'Extra Large']
    }
  ];



  const handleSelect = (name, value) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Close dropdown after selecting an item
    setShowtype(false);
    setShowprice(false);
    setShowlocation(false);
    setShowsize(false);
  };

  return (
    <div className='z-0 w-[100%] h-[100%]  relative'>
      <img className=' w-[100%] h-[70vh]' src="https://seeblindspot.com/wp-content/uploads/2020/07/NY-1024x524.jpg" alt="" />
      <div className="absolute top-0 left-0 w-[100%] h-[70vh] bg-black opacity-50"></div>
      <div className='absolute top-0 left-0 md:py-[100px] px-[40px] py-[40px] md:px-[150px] text-white font-bold'>
        <div className='text-3xl md:text-5xl text-center'>Book Perfect Billboards And Other OOH Media In Few Clicks</div>
        <div className='md:text-2xl text-lg py-[40px]  font-semibold text-center'>ADBUQ lets you search billboards by Category, type, availability, size, city & other criteria. You can also view pictures/videos and make comparisons.</div>
      </div>
      <div className='relative shadow-xl  py-[30px] md:py-[15px]  shadow-slate-400 flex items-center justify-around flex-col bottom-10  rounded-md bg-white mx-auto md:w-[70%] w-[80%]  min-h-[26vh]'>
        <div className='flex w-full flex-col md:flex-row items-center md:items-start  gap-y-9 py-5  justify-evenly '>
          {
            items.map((item, index) => (
              <div className='flex relative flex-col' key={index}>
      {item.name}
      <div  onClick={item.onClick} className='border w-[210px] py-2 border-gray-400  flex justify-between items-center'>
        <span className='text-gray-600 px-3 text-sm  text-nowrap'>{selectedItems[item.name.toLowerCase()] || item.placeholder}</span>
        <RiExpandUpDownFill size={18} />
      </div>
      {
        ((item.name === 'Looking For' && showtype) || 
        (item.name === 'Maximum Price' && showprice) || 
        (item.name === 'Location' && showlocation) || 
        (item.name === 'Billboard Size' && showsize)) && 
          <DropdownList 
            items={item.items} 
            onSelect={(value) => handleSelect(item.name.toLowerCase(), value)} 
          />
      }
    </div>
            ))
          }
        </div>
        <div><button className='bg-purple-600 py-2 rounded-lg px-4 text-white'>Search</button></div>
      </div>
    </div>
  );
}

export default Body_search
