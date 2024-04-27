import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Billboard from "../models/billboardSchema.js";
import City from "../models/citySchema.js";
import Province from "../models/provinceSchema.js";
import { populate } from "dotenv";

export const searchbyProvince = async (req, res) => {
    try {
      // Assuming 'provinceId' is the name of the parameter in the route
      const provinceId = req.params.provinceid;
      console.log(provinceId);
  
      const getprovinceinfo = await Province.find({ _id: provinceId });
      console.log(getprovinceinfo);
  
      if (!getprovinceinfo.length) {
        return res.status(401).json({
          success: false,
          message: 'No billboards in this province'
        });
      }
  
      const getbillboards = await Billboard.find({ province: provinceId }).populate("province");
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
  
export const searchbyCity=async(req,res)=>{
    try {
       
        const getcityid= req.params.cityid
        const getcityinfo= await Province.find({_id:getcityid})
        if(!getcityinfo){
            return res.status(401).json({ 
                success: false,
                message: 'No billboards in this city'
              });
        }
        const getbillboards=await Billboard.find({city:getcityid}).populate("city").populate("province")
        
   
       return res.status(201).json({ 
         success: true,
         message: 'Billboard get successfully', 
         billboard: getbillboards
       });
     } catch (error) {
       console.error('Error gettingbillboard:', error);
       res.status(500).json({ 
         success: false,
         error: 'Internal server error' 
       });
     }
}
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
        const billboards = await Billboard.find(query).populate('city').populate('province');

        res.status(200).json({ success: true, data: billboards });
    } catch (error) {
        console.error('Error searching billboards by location:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};


// Controller function to insert a new billboard
export const insertBillboard = async (req, res) => {
    try {
      const { name, availability, dimensions, price, location, city, province } = req.body;
      
      // Check for missing required fields
      if (!name || !availability || !dimensions || !price || !location || !city || !province) {
        return res.status(400).json({ 
          success: false,
          message: "Please provide all the required input fields." 
        });
      }
  
      // Check if the province exists or create a new one
      let existingProvince = await Province.findOne({ name: province });
      if (!existingProvince) {
        existingProvince = await Province.create({ name: province });
      }
  
      // Check if the city exists or create a new one
      let existingCity = await City.findOne({ name: city, province: existingProvince._id });
      if (!existingCity) {
        existingCity = await City.create({ name: city, province: existingProvince._id });
      }
  
      // Create a new Billboard document
      const newBillboard = new Billboard({
        name,
        availability,
        dimensions,
        price,
        location,
        city: existingCity._id, // Use the ObjectId of the existing city
        province: existingProvince._id // Use the ObjectId of the existing province
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
