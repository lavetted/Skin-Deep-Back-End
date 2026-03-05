import Cart from "../models/Cart.js";

// GET user's cart
export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate(
    "items.product",
  );
  res.json(cart);
};

// ADD to cart
export const addToCart = async (req, res) => {
  const { productId } = req.body;

  let cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    cart = await Cart.create({
      user: req.user.id,
      items: [],
    });
  }

  const existingItem = cart.items.find(
    (item) => item.product.toString() === productId,
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({ product: productId });
  }

  await cart.save();
  res.json(cart);
};
