import React, { useState, useEffect, Component } from "react";
import axios from 'axios';
import {Container, Row, Col} from "react-bootstrap"
import  CartProductCard  from "./CartProductCard"
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';

const apiUrl = `http://localhost:8080`;
const productApiUrl = apiUrl + '/products';
const getProductApiUrl = apiUrl + '/getProducts';
const cartApiUrl = apiUrl + '/cart';

export const SubTotal = (props) => (
  <section>
            <div className="banner-innerpage">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-12 align-self-center text-center">
                    <h1 className="title">Summary</h1>
                    <h2>${
                      props.map(li => (li.price * li.quantity)).reduce((sum, val) => sum + val, 0)
                      }
                    </h2>
                  </div>
                </div>
            </div>
            </div>
        </section>
  
)


class Cart extends Component {

  
  constructor(props)
  {
    super(props);
    console.log(props)
    this.state = { 
      cart: this.props.cart,
      sum:  0
    }; 

    this.getSubTotal = this.getSubTotal.bind(this)

    
  }

  
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
/*
  componentDidMount() {
    this.getSubTotal();
    //this.getCartProducts();
  }
*/

  getSubTotal(){
    
    return this.state.cart.map(li => (li.price * li.quantity)).reduce((sum, val) => sum + val, 0)

  }

 
    

  render(){

    const hasItems = (this.props.cart != null && this.props.cart.length > 0);
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
            {hasItems? (
            <div>
              <h1>Subtotal</h1>
              <h2>

                        <NumberFormat value={
                          this.props.cart.map(li => (li.price * li.quantity)).reduce((sum, val) => sum + val, 0)
                          }
                          displayType={'text'}
                            thousandSeparator={true} 
                            prefix={'$'} 
                            />
              </h2>
            </div>
            ) : ""}
        </Container>
        
  );
};
}

const mapStateToProps = state => {
  return { 
    cart: state.cart, 
    sum: state.sum
  }
}

export default connect(mapStateToProps)(Cart)