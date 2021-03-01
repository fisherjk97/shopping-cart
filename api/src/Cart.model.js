const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    productId: Number,
    quantity: Number
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
