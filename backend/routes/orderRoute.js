import express from "express";
import {createOrder, getOrder } from "../controllers/billboardController.js";

const router = express.Router();

router.route("/book").post(createOrder);
router.route("/getorder").get(getOrder);




export default router;