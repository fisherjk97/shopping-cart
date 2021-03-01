import React, { useState, useEffect, Component } from "react";
import axios from 'axios';

const apiUrl = `http://localhost:8080`;
const productApiUrl = apiUrl + '/products';
const cartApiUrl = apiUrl + '/cart';
class Cart extends Component {

    state = {
        cart: [],
        products: []
    };

    getFishAndChips = async () => {
      const cart = await fetch(cartApiUrl).then(response => response.json());
  
      const productIds = cart.map(c => c.productId),
      productOpts = { method: 'POST', body: JSON.stringify({ productIds }) };
  
      const products = await fetch(productApiUrl, productOpts).then(response => response.json());
  }

    getCartProducts = async () => {
      console.log("fetching cart");
      fetch(cartApiUrl) // Request fish
          .then(response => response.json())
          .then(cart => {
              this.state.cart = cart;
  
              const productIds = cart.map(cart => cart.productId);
  

              console.log(productIds);
              return fetch( // Request chips using fish ids
                        productApiUrl,
                          {
                              method: 'POST',
                              body: JSON.stringify({ productIds })
                          }
                      );
          })
          .then(response => response.json())
          .then(products => {
              this.state.products = products;
          });

          console.log("done fetching cart");
  }

  componentDidMount() {
    this.getCartProducts();
    this.getFishAndChips();
  }


  /*
    async getCart() {
      console.log("fetching cart");
      //await this.init(10);
      const res = await axios.get(apiUrl + '/products');
          this.setState({
              cart: res.data
          });
      console.log("done fetching cart");
  }
  
*/
    getCartSize() {
        //get actual cart size
        return this.state.cart.length;
    }

    async updateQuantity() {
      console.log("fetching products");
      //await this.init(10);
      const res = await axios.put(apiUrl + '/cart');
          this.setState({
              cart: res.data
          });
      console.log("done fetching products");
    }

  render(){
  return (
    <main>
      <section>
        <div className="banner-innerpage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 align-self-center text-center">
                <h1 className="title">Your Cart</h1>
                <h6 className="subtitle op-8">
                  Lots of goodies
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="spacer">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-9">
                <div className="row shop-listing">
                  {this.state.cart.map((product, i) => (
                    <div className="col-lg-4">
                      <div className="card shop-hover border-0">
                        <img
                          src={"http://localhost:4000/" + product.image}
                          alt="wrapkit"
                          className="img-fluid"
                        />
                        <div className="card-img-overlay align-items-center">
                          <button
                            onClick={(e) => this.updateQuantity(product._id, 1)}
                            className="btn btn-md btn-info"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <div className="card border-0">
                        <h6>
                          <a href="#" className="link">
                            {product.name}{" "}
                          </a>
                        </h6>
                        <h6 className="subtitle">by Wisdom</h6>
                        <h5 className="font-medium m-b-30">
                          $195 /{" "}
                          <del className="text-muted line-through">$225</del>
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
}

export default Cart;