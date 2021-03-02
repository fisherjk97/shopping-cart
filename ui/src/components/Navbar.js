import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import App from '../App';
import  Cart  from "./Cart"
import  Products  from "./Products"
import { connect } from "react-redux";


function getCartSize(){
  this.props.dispatch({
    type: 'GET_CART',
    payload: []
  })
if(this.props.payload == null){
  return 0;
}else{
  return this.props.payload.length;
}
}

export const CartButton = (props) => (
    <Link to="/cart">
        <Button variant="primary" onclick="">
            Cart <FontAwesomeIcon icon={faShoppingCart}/> <Badge variant="light">{this.props.cart.length}</Badge>
            <span className="sr-only">unread messages</span>
        </Button>
    </Link>
    
  )


  class NavBar extends Component {


    getCart = () => {
      this.props.dispatch({ type: "GET_CART" });
    };

   

    render(){
        return (
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg">
          <Link to="/"><Navbar.Brand href="#home">Shopping Cart</Navbar.Brand></Link>
          <Link to="/products"><Navbar.Brand href="#products">Products</Navbar.Brand></Link>
          <CartButton cart={this.getCart} ></CartButton>
          {/*--<Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/about"><Nav.Link href="#about">About</Nav.Link></Link>
              <Link to="/users"><Nav.Link href="#users">Users</Nav.Link></Link>
            </Nav>
           
            <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
              <Button type="submit">Submit</Button>
            </Form>
          </Navbar.Collapse>
        -->*/}
        </Navbar>
        <Switch>
        <Route path="/products" exact="/products" component={Products}>
          <Products />
        </Route>
        <Route path="/cart" exact="/cart" component={Cart}>
          <Cart />
        </Route>
        <Route path="/" >
          <App />
        </Route>
      </Switch>
        </Router>
        );
    }
  

}

export default connect(null)(NavBar)