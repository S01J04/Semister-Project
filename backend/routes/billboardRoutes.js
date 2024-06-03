import express from "express";
import { deleteBillboard, getProvince, getallcities, getalldata, insertBillboard, searchbyCity, searchbyProvince, searchbylocation, updateBillboard } from "../controllers/billboardController.js";
import isAuthenticated from "../config/auth.js";
import multer from "multer";
const upload = multer({dest:'uploads/'})

const router = express.Router();
router.route("/getall").get(getalldata);
router.route("/getprovince").get(getProvince);
router.route("/province/:provinceid").get(searchbyProvince);
router.route("/city/:cityid").get(searchbyCity);
router.route("/location/:locationid").post(searchbylocation);
router.route("/create").post(upload.single('image'),insertBillboard);
router.route("/delete/:id").delete(deleteBillboard);
router.route("/update/:id").put(upload.single('image'),updateBillboard);
router.route("/getcities").get(getallcities);


export default router;