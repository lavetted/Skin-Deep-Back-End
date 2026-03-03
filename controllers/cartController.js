import CartItem from "../models/CartItem.js";

exports.getCart = async (req, res) => {
  const items = await CartItem.find().populate("productId");
  res.json(items);
};

exports.addToCart = async (req, res) => {
  const item = await CartItem.create(req.body);
  res.status(201).json(item);
};

exports.updateCartItem = async (req, res) => {
  const item = await CartItem.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(item);
};

exports.removeCartItem = async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed from cart" });
};
