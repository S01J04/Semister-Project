import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Billboard from "../models/billboardSchema.js";
import { populate } from "dotenv";
import Order from "../models/orderSchema.js";

export const searchbyProvince = async (req, res) => {
  try {
    // Assuming 'provinceId' is the name of the parameter in the route
    const provincename = req.params.provinceid;
    console.log(provincename);

    const getprovinceinfo = await Billboard.find({ province:provincename });
    console.log(getprovinceinfo);

    if (!getprovinceinfo.length) {
      return res.status(401).json({
        success: false,
        message: 'No billboards in this province'
      });
    }

    const getbillboards = await Billboard.find({ province: provincename })
    console.log(getbillboards);

    return res.status(201).json({
      success: true,
      message: 'Billboard get successfully',
      billboard: getbillboards
    });
  } catch (error) {
    console.error('Error getting billboard:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};
export const getalldata = async (req, res) => {
  try {
    const billboard = await Billboard.find()
    if (!billboard) {
      res.status(401).json({
        success: false,
        error: 'no province found'
      });
    }

    return res.status(201).json({
      success: true,
      message: 'billboard get successfully',
      billboard
    });
  } catch (error) {
    console.error('Error getting billboard:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};
export const getallcities = async (req, res) => {
  try {
    const billboards = await Billboard.find();
    if (!billboards || billboards.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'No billboards found'
      });
    }

    // Extract city names from billboard data
    const cityNames = billboards.map(billboard => billboard.city);
const uniqueCityNames = [...new Set(cityNames)];

    return res.status(200).json({
      success: true,
      message: 'Cities retrieved successfully',
      cities: uniqueCityNames
    });
  } catch (error) {
    console.error('Error getting cities:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

export const getProvince = async (req, res) => {
  try {
    // Retrieve distinct province names from the billboards
    const provinces = await Billboard.distinct('province');

    return res.status(200).json({
      success: true,
      message: 'Provinces retrieved successfully',
      provinces
    });
  } catch (error) {
    console.error('Error getting provinces:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};


export const searchbyCity = async (req, res) => {
  try {
    const cityName = req.params.city;

    // Find billboards with the specified city name
    const billboards = await Billboard.find({ city: cityName });

    return res.status(200).json({
      success: true,
      message: 'Billboards retrieved successfully',
      billboards
    });
  } catch (error) {
    console.error('Error getting billboards by city:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};
export const confirmorder = async (req, res) => {
  try {
    const { billboard: { _id: billboardId } } = req.body;
    console.log(billboardId)
    // Find the existing billboard by ID
    const existingBillboard = await Billboard.findById(billboardId);

    // Check if the billboard exists
    if (!existingBillboard) {
      return res.status(404).json({
        success: false,
        error: 'Billboard not found'
      });
    }

    // Update the availability to "booked"
    existingBillboard.availability = "booked";

    // Save the updated billboard
    const updatedBillboard = await existingBillboard.save();

    // Reload location if successful (Not recommended for API)
    // location.reload(); // This is for browser reload, not applicable in API

    return res.status(200).json({
      success: true,
      message: "Order booked successfully.",
      billboard: updatedBillboard
    });
  } catch (error) {
    console.error('Error getting billboards by city:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};
export const cancelorder = async (req, res) => {
  try {
    const { billboard: { _id: billboardId },_id } = req.body;
    console.log(billboardId)
    // Find the existing billboard by ID
    const existingBillboard = await Billboard.findById(billboardId);
    const removeorder = await Order.findByIdAndDelete(_id);
    // Check if the billboard exists
    if (!existingBillboard) {
      return res.status(404).json({
        success: false,
        error: 'Billboard not found'
      });
    }

    // Update the availability to "booked"
    existingBillboard.availability = "available";

    // Save the updated billboard
    const updatedBillboard = await existingBillboard.save();

    // Reload location if successful (Not recommended for API)
    // location.reload(); // This is for browser reload, not applicable in API

    return res.status(200).json({
      success: true,
      message: "Order removed successfully.",
      billboard: updatedBillboard
    });
  } catch (error) {
    console.error('Error getting Order:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};



export const updateBillboard = async (req, res) => {
  console.log(req.body);
  try {
    const billboardId = req.params.id;
    const { name, description, availability, width, height, price, location, city, province, type } = req.body;

    // Validate required fields
    if (!name || !description || !type || !availability || !width || !height || !price || !location || !city || !province) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required input fields."
      });
    }

    // Check if the billboard exists
    const existingBillboard = await Billboard.findById(billboardId);
    if (!existingBillboard) {
      return res.status(404).json({
        success: false,
        message: "Billboard not found."
      });
    }

    // Assuming location is an object containing longitude and latitude
    const { longitude, latitude } = req.body.location;
    const { name: cityName } = req.body.city;

    // Update the billboard fields
    existingBillboard.name = name;
    existingBillboard.description = description;
    existingBillboard.type = type;
    existingBillboard.availability = availability;
    existingBillboard.dimensions = `${width}x${height}`;
    existingBillboard.price = price;
    existingBillboard.location.coordinates = [parseFloat(longitude), parseFloat(latitude)]; // Convert to numbers
    
    // Update the city name
    existingBillboard.city = city;
    
    existingBillboard.province = province;
    
    if (req.file.path) {
      existingBillboard.imgpath = req.file.path;
    }
    
    console.log(existingBillboard);
    
    // Save the updated billboard
    const updatedBillboard = await existingBillboard.save();
    

    return res.status(200).json({
      success: true,
      message: "Billboard updated successfully.",
      billboard: updatedBillboard
    });
  } catch (error) {
    console.error('Error updating billboard:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

export const searchbylocation = async (req, res) => {
  try {
    const { search, availability, type, cities, size } = req.body;

    // Define the query object
    const query = {};

    // Check if search term is provided
    if (search) {
      // Example: Search by name
      query.name = { $regex: search, $options: 'i' }; // Case-insensitive search
    }

    // Check if availability filter is provided
    if (availability) {
      // Example: Search by availability
      query.availability = { $in: availability };
    }

    // Check if type filter is provided
    if (type) {
      // Example: Search by type
      query.type = type;
    }

    // Check if cities filter is provided
    if (cities) {
      // Example: Search by cities
      query.city = { $in: cities };
    }

    // Check if size filter is provided
    if (size) {
      // Example: Search by size
      query.dimensions = size;
    }

    // Perform the search using the query object
    const billboards = await Billboard.find(query)

    res.status(200).json({ success: true, data: billboards });
  } catch (error) {
    console.error('Error searching billboards by location:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
export const deleteBillboard = async (req, res) => {
  try {
    const getbillboardid = req.params.id;

    // Check if the billboard exists
    const getbillboard = await Billboard.findById(getbillboardid);
    if (!getbillboard) {
      return res.status(404).json({
        success: false,
        message: "Billboard not found."
      });
    } ``

    // Delete the billboard
    const deletebillboard = await Billboard.findByIdAndDelete(getbillboardid);
    return res.status(200).json({
      success: true,
      message: "Billboard deleted successfully.",
      billboard: deletebillboard
    });
  }
  catch (error) {
    console.error('Error deleting billboard:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}


// Handle order creation
const createOrder = async (req, res) => {
  const { userid, billboardid, months } = req.body;

  // Parse the months string into a number
  const numberOfMonths = parseInt(months);

  try {
    // Check if the user has already ordered the specified billboard
    const existingOrder = await Order.findOne({ user: userid, billboard: billboardid });

    if (existingOrder) {
      return res.status(400).json({ success: false, error: 'You have already ordered this billboard' });
    }

    // Calculate the end date based on the parsed number of months
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + numberOfMonths * 30 * 24 * 60 * 60 * 1000);

    // Create a new order document
    const order = new Order({
      user: userid,
      billboard: billboardid,
      startDate: startDate,
      endDate: endDate
    });

    // Save the order to the database
    const savedOrder = await order.save();

    // Return success response with the saved order
    res.status(201).json({ success: true, order: savedOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    // Return error response
    res.status(500).json({ success: false, error: 'Failed to create order' });
  }
};

export { createOrder };



// Controller function to insert a new billboard
export const insertBillboard = async (req, res) => {
  console.log(req.body, req.file);
  try {
    const { name, description, availability, type, dimensions, price, location, city, province } = req.body;

    // Convert longitude and latitude to numbers
    const longitude = parseFloat(location.longitude);
    const latitude = parseFloat(location.latitude);

    // Check for missing required fields
    if (!name || !description || !availability || !dimensions || !type || !price || !longitude || !latitude || !city || !province) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required input fields."
      });
    }

    // Check if a billboard with the same name or location already exists
    const existingBillboard = await Billboard.findOne({
      name: name,
      'location.coordinates': [longitude, latitude]
    });
    if (existingBillboard) {
      return res.status(409).json({
        success: false,
        message: "A billboard with the same name or location already exists."
      });
    }
    // Create a new Billboard document
    const newBillboard = new Billboard({
      name,
      description,
      imgpath: req.file.path,
      availability,
      type,
      dimensions,
      price,
      location: {
        type: "Point",
        coordinates: [longitude, latitude]
      },
      city: city, // Use the ObjectId of the existing city
      province: province // Use the ObjectId of the existing province
    });

    // Save the new billboard document to the database
    await newBillboard.save();

    res.status(201).json({
      success: true,
      message: 'Billboard inserted successfully',
      billboard: newBillboard
    });
  } catch (error) {
    console.error('Error inserting billboard:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};
export const getOrder = async (req, res) => {
  try {
    // Fetch orders from the database 
    
    const orders = await Order.find().populate("user").populate("billboard");

    res.status(200).json({
      success: true,
      data: orders
    });
  } catch (error) {
    console.error('Error getting orders:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};