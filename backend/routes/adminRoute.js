import express from "express";
import { Login, logout } from "../controllers/adminController";


const router = express.Router();

router.route("/adminlogin").post(Login);
router.route("/adminlogout").post(logout);



export default router;