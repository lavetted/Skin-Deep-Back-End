import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    name: "Nioxin Shampoo & Conditioner Liter Duo Sets",
    description:
      "For Natural, Colored, & Damaged Hair with Light to Progressed Thinning | Strengthen & Boost Hair Density",
    price: 100,
    category: "Haircare",
    brand: "Nioxin",
    imageUrl: "https://m.media-amazon.com/images/I/71aZxnpL8nL._SL1500_.jpg",
  },
  {
    name: "Micro Ingredients Oil of Oregano Softgels, 300 Count",
    description:
      "2 in 1 Formulated with Black Seed Oil | 4X Strength Carvacrol & Thymoquinone | Plant Based, Non-GMO | Supports Immune Health",
    price: 35,
    category: "Herbal Supplements",
    brand: "Micro Ingredients",
    imageUrl: "https://m.media-amazon.com/images/I/618fR9xnPgL._AC_SL1500_.jpg",
  },
  {
    name: "GIN GINS Lemon Ginger Chews",
    description:
      "Natural Fresh Ginger Candy by The Ginger People - Individually Wrapped Healthy Candy - Lemon Flavor - Large 1 lb Bag (16oz) - Pack of 1",
    price: 15,
    category: "Ginger Candy",
    brand: "AromaLux",
    imageUrl: "https://m.media-amazon.com/images/I/81MGgFiC9kL._SL1500_.jpg",
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
