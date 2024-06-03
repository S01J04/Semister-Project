import express from "express";
import {cancelorder, confirmorder, createOrder, getOrder } from "../controllers/billboardController.js";

const router = express.Router();

router.route("/book").post(createOrder);
router.route("/getorder").get(getOrder);
router.route("/confirmorder").post(confirmorder);
router.route("/cancelorder").post(cancelorder);




export default router;