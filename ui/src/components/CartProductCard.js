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
import { connect } from 'react-redux'

import axios from 'axios';
const apiUrl = `http://localhost:8080`;

class CartProductCard extends Component {


  constructor(props)
  {
    super(props);
    console.log(props)
    this.state = { 
      quantity: 0
    }; 

    this.removeFromCart = this.removeFromCart.bind(this)

    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)

  }


  removeFromCart(event) {
    console.log(this.props.index);
    event.preventDefault()
    this.props.dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { index: this.props.index }
    })

    //this.setState({ quantity: this.state.quantity})
  }

  increaseQuantity(event) {
    event.preventDefault()
    this.props.dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { index: this.props.index,  quantity: 1 }
    })

  }

  decreaseQuantity(event) {
    event.preventDefault()

    if(this.props.quantity > 1){

    this.props.dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { index: this.props.index,  quantity: -1 }
    })
    }else{
      this.props.dispatch({
        type: 'REMOVE_FROM_CART',
        payload: { index: this.props.index }
      })
    }
    //this.setState({ quantity: this.state.quantity})

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
            <Card.Text>Name: {this.props.name}</Card.Text>
            {
            /*<Card.Text>
              {this.props.description}
            </Card.Text>*/
            }
            <Card.Title>
            <NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Card.Title>
            

            {/*<Button variant="danger" onClick={this.removeFromCart}>Remove</Button>
            */}
            <Card.Title>Quantity: {this.props.quantity}</Card.Title>


            <Button variant="info" onClick={this.decreaseQuantity}>- 1</Button>
            
            <Button variant="success" onClick={this.increaseQuantity}>+ 1</Button>
         
         
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
  
  export default connect(mapStateToProps)(CartProductCard)

