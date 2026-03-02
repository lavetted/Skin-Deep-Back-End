import express from "express";
import mongoose from "mongoose";
import { logReq, globalErr } from "./middleware/middleware.js";
import dotenv from "dotenv";
import connectDB from "./db/conn.js";
import * as rowdy from "rowdy-logger";

// Setup
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logReq);
const routesReport = rowdy.begin(app);

// Routes

// Global error handler
app.use(globalErr);

// Start server ONLY after DB connects
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT} 🚀`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
  }
};

routesReport.print();
startServer();
