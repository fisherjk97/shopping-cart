const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    productId: String,
    quantity: Number
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
