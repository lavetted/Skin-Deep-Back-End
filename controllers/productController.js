import Product from "../models/Product.js";

// GET all products
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// GET product by ID
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

// CREATE product
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

// UPDATE product
const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
};

// DELETE product
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
