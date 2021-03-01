import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';

import NumberFormat from 'react-number-format';
import NumericInput from 'react-numeric-input';

import axios from 'axios';
const apiUrl = `http://localhost:8080`;
class ProductCard extends Component {


  constructor(props)
  {
    super(props);
    console.log(props)
    this.state = { 
      quantity: 0
    }; 
  }

  addToCart = async () => {
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



  updateQuantity(n){
    console.log("updating quantity to " + n);
    this.setState(state => ({
      quantity: n
    }));
  }


  render(){
        return (
          
          
            <Card
              bg="dark"
              text="white"
              className="mb-3"

            >
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Text>{this.props.name}</Card.Text>
            {
            /*<Card.Text>
              {this.props.description}
            </Card.Text>*/
            }
            <Card.Title>
            <NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Card.Title>
            

            <Button variant="danger" onClick={() => this.addToCart()}>Add to Cart</Button>
            {
              /*<Button variant="primary" onClick={() => this.updateQuantity(1)}>Update</Button>*/
            }
         
         
          </Card.Body>
        </Card>
        )
    }
  }
  
export default ProductCard

