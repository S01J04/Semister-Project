import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Contactpage } from "../models/contactScehma.js";

export const Register = async (req, res) => {
    console.log(req.body)
    try {
        const { name, email, password } = req.body;
        // basic validation
        if (!name || !email || !password) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "User already exist.",
                success: false
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 16);

        await User.create({
            name,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            })
        };
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            })
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorect email or password",
                success: false
            });
        }
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            message: `Welcome back ${user.name}`,
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const getUser = async (req, res) => {
    try {
      // Fetch orders from the database 
      
      const users = await User.find()
  
      res.status(200).json({
        success: true,
        data: users
      });
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  };
export const Contact = async (req, res) => {
    try {
        const { name,email, description} = req.body;
        if (!email || !name||!description) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            })
        };
      
        const contact= await Contactpage.create({name:name,email:email,description:description})
       
       
        return res.status(201).json({
            message: `Contact successfull`,
            contact,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: "user logged out successfully.",
        success: true
    })
}
