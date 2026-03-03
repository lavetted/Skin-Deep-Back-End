import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    name: "Hydrating Face Cream",
    description: "Deep hydration formula",
    price: 45,
    category: "Skincare",
    brand: "GlowLab",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "Professional Makeup Palette",
    description: "24 vibrant shades",
    price: 52,
    category: "Makeup",
    brand: "BeautyPro",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "Luxury Eau de Parfum",
    description: "Elegant long-lasting fragrance",
    price: 89,
    category: "Fragrance",
    brand: "AromaLux",
    imageUrl: "https://via.placeholder.com/200",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Database seeded");
    process.exit();
  })
  .catch((err) => {
    console.error("Database seeding failed:", err.message);
    process.exit(1);
  });
