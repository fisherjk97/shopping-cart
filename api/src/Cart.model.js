const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema({
    productId: String,
    quantity: Number
});

const cartSchema = new mongoose.Schema({
    id: String,
    cart: [cartProductSchema]
});
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart
