const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const Product = require("./src/Product.model");
const cors = require('cors');
const { init } = require("./src/User.model");

app.use(cors());
const PORT = 8080;

function initProducts(n){

  products = [];
  for(var i = 0; i <  n; i++){
    product = new Product(
      { id: i+1 , 
        name: "Product " + (i + 1),
        description: "Really cool description",
        price: 49.99 * (i + 1)
      });

      products.push(product);
  }
  return products;
}



app.get("/products", async (req, res) => {
  //const products = await Product.find();
  const products = initProducts(10);
  res.json(products);
});

app.post("/products", async (req, res) => {
  const product = new Product({
      id = req.id,
      name = req.name,
      description = req.description,
      price = req.price
  });
  await product.save().then(() => console.log("Added product"));
});

app.get("/cart", async (req, res) => {
  const cart = await Cart.find();
  res.json(cart);
});


app.post("/cart", async (req, res) => {
  const cart = new Cart({
      productId: req.id,
      quantity: req.quantity
  });
  await cart.save().then(() => console.log("Added product"));
});

app.post("/cart", async (req, res) => {



  await cart.save().then(() => console.log("Cart updated"));
});



app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
