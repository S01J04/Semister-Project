import express from "express";
import { deleteBillboard, insertBillboard, searchbyCity, searchbyProvince, searchbylocation, updateBillboard } from "../controllers/billboardController.js";
import isAuthenticated from "../config/auth.js";


const router = express.Router();

router.route("/province/:provinceid").get(searchbyProvince);
router.route("/city/:cityid").get(searchbyCity);
router.route("/location/:locationid").post(searchbylocation);
router.route("/create").post(isAuthenticated,insertBillboard);
router.route("/delete/:id").get(isAuthenticated,deleteBillboard);
router.route("/update/:id").get(isAuthenticated,updateBillboard);


export default router;