import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import billboardRoutes from './routes/billboardRoutes.js';
import adminRoute from './routes/adminRoute.js';
import orderRoute from './routes/orderRoute.js';
import cors from "cors";
import path from "path";
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
  origin: "*", // Allow requests from this origin
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// API routes
app.use("/api/user", userRoute);
app.use("/api/billboards", billboardRoutes);
app.use("/api/adminpage",adminRoute);
app.use("/api/order",orderRoute);
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(3000, () => {
  console.log(`Server listening at port ${3000}`);
});
