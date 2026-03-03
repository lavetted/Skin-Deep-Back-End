import express from "express";
import mongoose from "mongoose";
import { logReq, globalErr } from "./middleware/middleware.js";
import dotenv from "dotenv";
import connectDB from "./db/conn.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import * as rowdy from "rowdy-logger";

// Setup

connectDB();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(express.json());
app.use(logReq);
const routesReport = rowdy.begin(app);

// Routes
app.use(cors());
app.use("/api/products", productRoutes);

// Global error handler
app.use(globalErr);

// Start server ONLY after DB connects
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is running on PORT: ${PORT}`);
      routesReport.print();
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
  }
};

startServer();
