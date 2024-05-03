import React, { useState } from 'react';
import axios from 'axios';

const Billboards = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        availability: '',
        imgpath: '',
        type: '',
        dimensions: '',
        location: { longitude: '', latitude: '' },
        price: '',
        city: '',
        province: ''
      });
      const [image, setImage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'longitude' || name === 'latitude') {
          setFormData(prevState => ({
            ...prevState,
            location: {
              ...prevState.location,
              [name]: value
            }
          }));
        } else if (name === 'width' || name === 'height') {
          setFormData(prevState => ({
            ...prevState,
            dimensions: prevState.dimensions ? `${prevState.dimensions}x${value}` : value
          }));
        } else {
          setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        }
      };
    
      const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
      
        // Append form data
        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('availability', formData.availability);
        formDataToSend.append('type', formData.type);
        formDataToSend.append('dimensions', formData.dimensions);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('city', formData.city);
        formDataToSend.append('province', formData.province);
        formDataToSend.append('location[longitude]', parseFloat(formData.location.longitude));
        formDataToSend.append('location[latitude]', parseFloat(formData.location.latitude));
        formDataToSend.append('image', image);
      
        try {
          const response = await axios.post('http://localhost:3000/api/billboards/create', formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(response.data);
          if(response.data.success){
            setFormData(null);
            
          }
        } catch (error) {
          console.error(error);
        }
      };
      
      
      
      
    return (
        <div className='w-full p-8'>
            <div className='text-center text-3xl font-bold border-b-2 border-black mb-4'>BillBoards CRUD</div>
            <div className='mb-4'>ADD+</div>
            <form onSubmit={handleSubmit} encType='multipart/form-data' className='grid grid-cols-3 gap-4'>
                <div className='col-span-1'>
                    <label htmlFor="name" className='block'>Name:</label>
                    <input type="text" name="name" placeholder='Billboard name' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="description" className='block'>Description:</label>
                    <input type="text" name="description" placeholder='Description' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="availability" className='block'>Availability:</label>
                    <input type="text" name="availability" placeholder='Availability' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>

                <div className='col-span-1'>
                    <label htmlFor="type" className='block'>Type:</label>
                    <input type="text" name="type" placeholder='Type' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="longitude" className='block'>Longitude:</label>
                    <input type="value" name="longitude" placeholder='Longitude' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="latitude" className='block'>Latitude:</label>
                    <input type="value" name="latitude" placeholder='Latitude' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="width" className='block'>Width:</label>
                    <input type="text" name="width" placeholder='Width' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="height" className='block'>Height:</label>
                    <input type="text" name="height" placeholder='Height' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="price" className='block'>Price:</label>
                    <input type="text" name="price" placeholder='Price' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="city" className='block'>City:</label>
                    <input type="text" name="city" placeholder='City' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
       

                <div className='col-span-1'>
                    <label htmlFor="province" className='block'>Province:</label>
                    <select name="province" onChange={handleChange} className='border border-gray-400 p-2 w-full rounded'>
                        <option value="">Select Province</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Sindh">Sindh</option>
                        <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                        <option value="Balochistan">Balochistan</option>
                        <option value="Gilgit Baltistan">Gilgit Baltistan</option>
                        <option value="Azad Jammu and Kashmir">Azad Jammu and Kashmir</option>
                        <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
                    </select>
                </div>

                <div className='col-span-3'>
                    <label htmlFor="billboardimages" className='block'>Add Image:</label>
                    <input type="file" name="image" onChange={handleImageChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-3'>
                    <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Billboards;
