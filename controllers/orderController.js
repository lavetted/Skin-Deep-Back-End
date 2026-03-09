import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

export const createOrder = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate(
    "items.product",
  );

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const total = cart.items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const order = await Order.create({
    user: req.user.id,
    items: cart.items.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
    })),
    total,
  });

  cart.items = [];
  await cart.save();

  res.json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate(
    "items.product",
  );

  res.json(orders);
};
