const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const Product = require("./src/Product.model");
const cors = require('cors');

app.use(cors());
const PORT = 8080;

function initProducts(n){

  products = [];
  for(var i = 0; i <  n; i++){
    product = new Product(
      { id: i+1 , 
        name: "Toy",
        description: "This is a toy",
        price: 50 * (i + 1)
      });

      products.push(product);
  }
  return products;
}



app.get("/products", async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

app.get("/cart", async (req, res) => {
  const cart = await Cart.find();

  res.json(cart);
});

app.post("/cart", async (req, res) => {
  await cart.save().then(() => console.log("Cart updated"));
});


app.get("/products/init", async (req, res) => {
 
  //await product.save().then(() => console.log("Product created"));
  products = initProducts(5);
  res.json(products);
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
