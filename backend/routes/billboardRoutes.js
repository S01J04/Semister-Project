import express from "express";
import { insertBillboard, searchbyCity, searchbyProvince, searchbylocation } from "../controllers/billboardController.js";


const router = express.Router();

router.route("/province/:provinceid").get(searchbyProvince);
router.route("/city/:cityid").get(searchbyCity);
router.route("/location/:locationid").post(searchbylocation);
router.route("/create").post(insertBillboard);


export default router;