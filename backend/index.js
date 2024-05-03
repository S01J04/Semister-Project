import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import billboardRoutes from './routes/billboardRoutes.js';
import adminRoute from './routes/adminRoute.js';
import cors from "cors";

dotenv.config({ path: ".env" });
databaseConnection();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads',express.static('uploads'))
// Configure CORS
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from this origin
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// API routes
app.use("/api/user", userRoute);
app.use("/api/billboards", billboardRoutes);
app.use("/api/adminpage",adminRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
