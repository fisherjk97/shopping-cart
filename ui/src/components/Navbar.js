import React from "react";
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

import  Cart  from "./Cart"
import  Product  from "./Products"


export const CartButton = () => (
    <Link to="/cart">
        <Button variant="primary" onclick="">
            Cart <FontAwesomeIcon icon={faShoppingCart}/> <Badge variant="light">{getCartSize()}</Badge>
            <span className="sr-only">unread messages</span>
        </Button>
    </Link>
    
  )


export const NavBar = () => {


        return (
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg">
          <Link to="/"><Navbar.Brand href="#home">Shopping Cart</Navbar.Brand></Link>
          <CartButton></CartButton>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
        </Navbar>
        <Switch>
        <Route path="/products" exact="/products" component={Product}>
          <Product />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/cart" exact="/cart" component={Cart}>
          <Cart />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
        </Router>
        );
    }
  

/*
export const Navbar = () => {
  return ( <Router>
    <div>
   
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

     
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}
*/

function getCartSize() {
    //get actual cart size
    return 10;
}

function Home() {
    return "";
  }
  
  function About() {
    return "";
  }
  
  function Users() {
    return "";
  }