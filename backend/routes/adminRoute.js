import express from "express";
import { Login, Register, logout } from "../controllers/adminController.js";


const router = express.Router();

router.route("/adminlogin").post(Login);
router.route("/adminregister").post(Register);
router.route("/adminlogout").post(logout);



export default router;