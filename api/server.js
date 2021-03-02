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
    
  var data = [];
  for(var i = 0; i <  n; i++){
    var product = (
      { id: i+1 , 
        name: "Product " + (i + 1),
        description: "This is a really cool product.",
        price: (49.99 * (i+ 1) * 0.5),
        quantity: 1
      });

      data.push(product);
  }
 return data;
}


//get products
app.get("/products", async (req, res) => {
  //const products = await Product.find();//get from database
  const products = initProducts(6);
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


app.post("/getProducts", bodyParser, async (req, res) => {
  var ids = req.body.productId;
  const products = await Product.find().where('_id').in(ids).exec();
  //const products = initProducts(10);
  res.json(products);
});

app.get("/cart", async (req, res) => {
  const cart = await Cart.find();
  res.json(cart);
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
  
  //find the cart with this id
  const query = { "id": req.body.id };
  //set the update
  var update = new Cart(req.body)
  // Return the updated document instead of the original document
  const options = { returnNewDocument: true };

  const cart = await Cart.findOneAndUpdate(query, update, {
    new: true,
    upsert: true // Make this update into an upsert
  });

  res.json(cart);
});

//update cart
app.put("/cart/", bodyParser, async (req, res) => {

  console.log(req.headers);
  console.log(req.body);
  const cart =  await Cart.findByIdAndUpdate(req.body._id, {
      cart: req.body.cart,
  }, {new: true});
  

  res.json(cart);

});


app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
