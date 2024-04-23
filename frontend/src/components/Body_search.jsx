import React, { useState } from 'react'
import { RiExpandUpDownFill } from "react-icons/ri"; import { GrRadialSelected } from "react-icons/gr";


const Body_search = () => {
  const [selectall, setselectall] = useState(false)
  const [deselectall, setdeselectall] = useState(false)
  const [type, setType] = useState(false);
  const [price, setPrice] = useState(false);
  const [location, setLocation] = useState(false);
  const [billboardSize, setBillboardSize] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
    const items = [
        { id: 1, name: 'item1' },
        { id: 2, name: 'item2' },
        { id: 3, name: 'item3' },
        { id: 4, name: 'item4' },
        { id: 5, name: 'item5' },
    ];
   
    const handleItemClick = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const handleSelectAll = () => {
        setSelectedItems(items.map(item => item.id));
        setselectall(true);
    };

    const handleDeselectAll = () => {
        setSelectedItems([]);
        setselectall(false);
    };

    const isItemSelected = (itemId) => {
        return selectedItems.includes(itemId);
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
            <div className='flex relative flex-col '>
              LOOKING FOR
              <div onClick={() => setType(!type)} className='border w-[180px] py-2 border-gray-400 rounded-lg flex items-center'><span className='text-gray-600 px-3 mr-10'>Select Type</span><RiExpandUpDownFill /></div>
              {type ? (
                <div className='border bg-white absolute top-[70px] w-[15vw] border-gray-400 rounded-md my'>
                  <div className='flex justify-between px-5 py-3 text-[11px]'>
                    <div className='border border-gray-400 px-3 rounded-lg py-1' onClick={handleSelectAll}>Select All</div>
                    <div onClick={handleDeselectAll} className='border border-gray-400 px-3 rounded-lg py-1'>Deselect All</div>
                  </div>
                  <div>
                    {items.map((item) => (
                      <div 
                        key={item.id}
                        className={`cursor-pointer border-gray-500 hover:bg-gray-200 border-b-2 px-3 py-1 flex items-center justify-between ${isItemSelected(item.id) ? 'bg-gray-200' : ''}`}
                        onClick={() => handleItemClick(item.id)}
                      >
                        <div>- {item.name}</div>
                        {isItemSelected(item.id) && <div><GrRadialSelected /></div>}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            
            <div className='flex relative flex-col '>
              MAXIMUM PRICE
              <div onClick={() => setPrice(!price)} className='border w-[180px] py-2 border-gray-400 rounded-lg flex items-center'><span className='text-gray-600 px-3 mr-10'>Select Price</span><RiExpandUpDownFill /></div>
              {price ? (
                <div className='border bg-white absolute top-[70px] w-[15vw] border-gray-400 rounded-md my'>
                  <div className='flex justify-between px-5 py-3 text-[11px]'>
                    <div className='border border-gray-400 px-3 rounded-lg py-1' onClick={handleSelectAll}>Select All</div>
                    <div onClick={handleDeselectAll} className='border border-gray-400 px-3 rounded-lg py-1'>Deselect All</div>
                  </div>
                  <div>
                    {items.map((item) => (
                      <div 
                        key={item.id}
                        className={`cursor-pointer border-gray-500 hover:bg-gray-200 border-b-2 px-3 py-1 flex items-center justify-between ${isItemSelected(item.id) ? 'bg-gray-200' : ''}`}
                        onClick={() => handleItemClick(item.id)}
                      >
                        <div>- {item.name}</div>
                        {isItemSelected(item.id) && <div><GrRadialSelected /></div>}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            
            <div className='flex relative flex-col '>
              LOCATION
              <div onClick={() => setLocation(!location)} className='border w-[180px] py-2 border-gray-400 rounded-lg flex items-center'><span className='text-gray-600 px-3 mr-10'>Select City</span><RiExpandUpDownFill /></div>
              {location ? (
                <div className='border bg-white absolute top-[70px] w-[15vw] border-gray-400 rounded-md my'>
                  <div className='flex justify-between px-5 py-3 text-[11px]'>
                    <div className='border border-gray-400 px-3 rounded-lg py-1' onClick={handleSelectAll}>Select All</div>
                    <div onClick={handleDeselectAll} className='border border-gray-400 px-3 rounded-lg py-1'>Deselect All</div>
                  </div>
                  <div>
                    {items.map((item) => (
                      <div 
                        key={item.id}
                        className={`cursor-pointer border-gray-500 hover:bg-gray-200 border-b-2 px-3 py-1 flex items-center justify-between ${isItemSelected(item.id) ? 'bg-gray-200' : ''}`}
                        onClick={() => handleItemClick(item.id)}
                      >
                        <div>- {item.name}</div>
                        {isItemSelected(item.id) && <div><GrRadialSelected /></div>}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
  
            <div className='flex relative flex-col '>
              BILLBOARD SIZE
              <div onClick={() => setBillboardSize(!billboardSize)} className='border w-[180px] py-2 border-gray-400 rounded-lg flex items-center'><span className='text-gray-600 px-3 mr-10'>Select Size</span><RiExpandUpDownFill /></div>
              {billboardSize ? (
                <div className='border bg-white absolute top-[70px] w-[15vw] border-gray-400 rounded-md my'>
                  <div className='flex justify-between px-5 py-3 text-[11px]'>
                    <div className='border border-gray-400 px-3 rounded-lg py-1' onClick={handleSelectAll}>Select All</div>
                    <div onClick={handleDeselectAll} className='border border-gray-400 px-3 rounded-lg py-1'>Deselect All</div>
                  </div>
                  <div>
                    {items.map((item) => (
                      <div 
                        key={item.id}
                        className={`cursor-pointer border-gray-500 hover:bg-gray-200 border-b-2 px-3 py-1 flex items-center justify-between ${isItemSelected(item.id) ? 'bg-gray-200' : ''}`}
                        onClick={() => handleItemClick(item.id)}
                      >
                        <div>- {item.name}</div>
                        {isItemSelected(item.id) && <div><GrRadialSelected /></div>}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div><button className='bg-purple-600 py-2 rounded-lg px-4 text-white'>Search</button></div>
        </div>
      </div>
    );
}

export default Body_search
