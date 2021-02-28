import React, { useState, useEffect, Component } from "react";

const apiUrl = `http://localhost:8080`;

class Cart extends Component {

    state = {
        cart: []
    };

    getCart(){
        return this.state.cart;
    }

    getCartSize() {
        //get actual cart size
        return 10;
    }

    updateQuantity() {
        //get actual cart size
        return 10;
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