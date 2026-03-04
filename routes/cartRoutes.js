import express from "express";
import controller from "../controllers/cartController.js";

const router = express.Router();

router.get("/", controller.getCart);
router.post("/", controller.addToCart);
router.put("/:id", controller.updateCartItem);
router.delete("/:id", controller.removeCartItem);

export default router;
