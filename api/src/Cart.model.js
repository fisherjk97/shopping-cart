const mongoose = require("mongoose");
const Product = require("./src/Product.model");
const cartSchema = new mongoose.Schema({
    //items: [Product]
    productId: String,
    quantity: Number
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
