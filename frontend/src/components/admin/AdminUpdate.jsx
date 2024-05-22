import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const AdminUpdate = (props) => {
    
    const string = props.props.size;
    const numbers = string.split("x");
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);
          
    console.log(num1, num2);
    
    const [update, setupdate] = useState(false);
    const [formData, setFormData] = useState({
        name: props.props.city,
        description: props.props.locationDescription,
        availability: props.props.availability,
        imgpath: '',
        type: props.props.type,
        width: num1, // Separate width and height fields
        height: num2,
        location: { longitude: props.props.location[0], latitude: props.props.location[1] },
        price: props.props.price,
        city: props.props.city,
        province: props.props.province 
    });
    const [image, setImage] = useState(null); // Initialize image state as null
    console.log(image)
    
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

    try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('availability', formData.availability);
        formDataToSend.append('type', formData.type);
        formDataToSend.append('width', formData.width);
        formDataToSend.append('height', formData.height);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('city', formData.city);
        formDataToSend.append('province', formData.province);
        formDataToSend.append('location[longitude]', parseFloat(formData.location.longitude));
        formDataToSend.append('location[latitude]', parseFloat(formData.location.latitude));
        formDataToSend.append('image', image); // Append image data

        const response = await axios.put(`http://localhost:3000/api/billboards/update/${props.props._id}`, formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        
        console.log(response.data);
        if (response.data.success) {
            // Reset form data to initial state
            setFormData({
                name: '',
                description: '',
                availability: '',
                imgpath: '',
                type: '',
                width: '',
                height: '',
                location: { longitude: '', latitude: '' },
                price: '',
                city: '',
                province: ''
            });
            setImage(null); // Reset image state
        }
    } catch (error) {
        console.error(error);
    }
};

    return (
       <>
        {update?"":<div className=' p-8 relative bottom-0  z-10 bg-white  w-[50vw]'>
            <div className='text-center text-3xl font-bold border-b-2 border-black mb-4'>BillBoards CRUD</div>
            <div className='mb-4'>UPDATE</div>
            <form onSubmit={handleSubmit} encType='multipart/form-data' className='grid grid-cols-3 gap-4'>
                <div className='col-span-1'>
                    <label htmlFor="name" className='block'>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="description" className='block'>Description:</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="availability" className='block'>Availability:</label>
                    <input type="text" name="availability" value={formData.availability} onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>

                <div className='col-span-1'>
                    <label htmlFor="type" className='block'>Type:</label>
                    <input type="text" name="type" value={formData.type} onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="longitude" className='block'>Longitude:</label>
                    <input type="value" name="longitude" value={formData.location.longitude} onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="latitude" className='block'>Latitude:</label>
                    <input type="value" name="latitude" value={formData.location.latitude} onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="width" className='block'>Width:</label>
                    <input type="text" name="width" value={formData.width} placeholder='Width' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="height" className='block'>Height:</label>
                    <input type="text" name="height" value={formData.height} placeholder='Height' onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="price" className='block'>Price:</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="city" className='block'>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} className='border border-gray-400 p-2 w-full rounded' />
                </div>
       

                <div className='col-span-1'>
                    <label htmlFor="province" className='block'>Province:</label>
                    <select name="province" value={formData.province} onChange={handleChange} className='border border-gray-400 p-2 w-full rounded'>
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
            <div onClick={()=>setupdate(!update)} className='absolute top-0 right-0 rounded-full   cursor-pointer hover:scale-125 ' ><IoMdCloseCircle size={40} />
</div>
        </div>}
       </>
    );
}

export default AdminUpdate
