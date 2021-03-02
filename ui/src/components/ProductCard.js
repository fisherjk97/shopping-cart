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
import { connect } from 'react-redux'
import { faThList } from '@fortawesome/free-solid-svg-icons';
const apiUrl = `http://localhost:8080`;

const cartApiUrl = apiUrl + "/cart";
const getProductApiUrl = + "/product";

class ProductCard extends Component {


  constructor(props)
  {
    super(props);
    console.log(props)
    this.state = { 
      cart: this.props.cart
    }; 

    this.addToCart = this.addToCart.bind(this)
  }


  addToCart(event) {
    console.log(this.props);
    event.preventDefault()

    var idAlreadyExists = (this.state.cart.filter(e => e.id === this.props.id).length > 0);
      /* vendors contains the element we're looking for */
    

    if(!idAlreadyExists){

    this.props.dispatch({
      type: 'ADD_TO_CART',
      payload: { id: this.props.id, name: this.props.name, price: this.props.price, quantity: 1 }
    })
    }else{
      this.props.dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id: this.props.id,  quantity: 1 }
      })
    }
    this.setState({ cart: this.state.cart.concat(this.props)})
  }



  componentDidMount(){
    this.setState({ cart: this.state.cart})

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
            

            <Button variant="danger" onClick={this.addToCart}>Add to Cart</Button>
            {
              /*<Button variant="primary" onClick={() => this.updateQuantity(1)}>Update</Button>*/
            }
         
         
          </Card.Body>
        </Card>
        )
    }
  }
  
  const mapStateToProps = state => {
    return { 
      cart: state.cart 
    }
  }
  
  export default connect(mapStateToProps)(ProductCard)

