const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const Product = require("./src/Product.model");
const Cart = require("./src/Cart.model");
const cors = require('cors');
const { init } = require("./src/User.model");
bodyParser = require('body-parser').json();
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
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


//get products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  //const products = initProducts(10);
  res.json(products);
});


//get a specific product
app.get("/products/:id", async (req, res) => {
  console.log(req.headers);
  console.log(req.params);
  console.log(req.body);
  const product = await Product.findById(req.params.id);
  //const products = initProducts(10);
  res.json(product);
});

//update products
app.put("/products/", bodyParser, async (req, res) => {

  console.log(req.headers);
  console.log(req.body);
  const product =  await Product.findByIdAndUpdate(req.body._id, {
      id: req.body.id,
      name : req.body.name,
      description : req.body.description,
      price : req.body.price
  }, {new: true});
  

  res.json(product);
});


//save products
app.post("/products", bodyParser, async (req, res) => {
  console.log(req.headers);
  console.log(req.body);

  var product = new Product(req.body)

  await  product.save()
  .then(item => {
    res.send("product "  + item.name + " saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
});

app.get("/cart", async (req, res) => {
  const cart = await Cart.find();
  res.json(cart);
});


app.post("/cart", bodyParser, async (req, res) => {
  console.log(req.headers);
  console.log(req.body);

  //var r = req.body;

  /*
  const product = new Product({
      id: r.id,  
      name : r.name,
      description : r.description,
      price : r.price
  });*/

  var cart = new Cart(req.body)

  await  cart.save()
  .then(item => {
    res.send("product "  + item.productId + " was updated in the cart database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
});

//update cart
app.put("/cart/", bodyParser, async (req, res) => {

  console.log(req.headers);
  console.log(req.body);
  const cart =  await Cart.findByIdAndUpdate(req.body._id, {
      productId: req.body.productId,
      quantity : req.body.quantity,
  }, {new: true});
  

  res.json(cart);

});


app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
