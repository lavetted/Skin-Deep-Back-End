import CartItem from "../models/CartItem.js";

const getCart = async (req, res) => {
  const items = await CartItem.find().populate("productId");
  res.json(items);
};

const addToCart = async (req, res) => {
  const item = await CartItem.create(req.body);
  res.status(201).json(item);
};

const updateCartItem = async (req, res) => {
  const item = await CartItem.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(item);
};

const removeCartItem = async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed from cart" });
};

export default {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
};
