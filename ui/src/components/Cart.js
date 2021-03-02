import React, { useState, useEffect, Component } from "react";
import axios from 'axios';
import {Container, Row, Col} from "react-bootstrap"
import  CartProductCard  from "./CartProductCard"
import { connect } from 'react-redux'
const apiUrl = `http://localhost:8080`;
const productApiUrl = apiUrl + '/products';
const getProductApiUrl = apiUrl + '/getProducts';
const cartApiUrl = apiUrl + '/cart';


class Cart extends Component {

    state = {
        cart: this.props.cart,
        products: []
    };
/*
    getCartProducts = async () => {
      const cart = await fetch(cartApiUrl).then(response => response.json());
      this.state.cart = cart[0].cart;
      const productId = this.state.cart.map(c => c.productId),
      productOpts = { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }) };
  
      const products = await fetch(getProductApiUrl, productOpts).then(response => response.json());
      this.state.products = products;

      this.setState({
        products: products
    });
    }
*/

  componentDidMount() {
    //this.getCartProducts();
    //this.getCartProducts();
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
    <Container>
           <section>
            <div className="banner-innerpage">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-12 align-self-center text-center">
                    <h1 className="title">Your Cart</h1>
                    
                </div>
                </div>
            </div>
            </div>
        </section>
            <Row >
              {
              this.props.cart.map((product, index) => (
                <Col xs="12" sm="12" md="6" lg="3" >
                    <CartProductCard index={index} id={product.id}  name={product.name} price={product.price} quantity={product.quantity} />
                </Col>

              ))}
              
            </Row>
        </Container>
  );
};
}

const mapStateToProps = state => {
  return { 
    cart: state.cart 
  }
}

export default connect(mapStateToProps)(Cart)