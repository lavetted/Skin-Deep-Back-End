import express from "express";
import { loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", async (req, res) => {
  const user = await user.create(req.body);
  res.json(user);
});

export default router;
