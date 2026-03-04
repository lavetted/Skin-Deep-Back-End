import express from "express";
import controller from "../controllers/productController.js";
import {
  getProducts,
  createProduct,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC ROUTE
router.get("/", getProducts);
router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProductById);
router.post("/", protect, controller.createProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

// 🔐 PROTECTED ROUTE
// router.post("/", protect, createProduct);

export default router;
