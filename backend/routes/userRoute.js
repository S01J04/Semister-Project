import express from "express";
import { Contact, Login, Register, getUser, logout,} from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/contact").post(Contact);
router.route("/getuser").get(getUser);



export default router;