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


class ProductCard extends Component {


  constructor(props)
  {
    super(props);
    console.log(props)
    this.state = { 
      quantity: 0
    }; 
  }

  addToCart(){
    console.log("adding to cart");
  }

  updateQuantity(n){
    console.log("updating quantity to " + n);
    this.setState(state => ({
      quantity: n
    }));
  }

  render(){
        return (
          <Card style={{ width: '18rem', color: "black" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.props.price}
            </Card.Text>
            <Button variant="primary" onClick={() => this.addToCart()}>Add to Cart</Button>
            <Button variant="primary" onClick={() => this.updateQuantity(1)}>Update</Button>

          </Card.Body>
        </Card>
        );
    }
  }
  
export {ProductCard}
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

function Home() {
    return "";
  }
  
  function About() {
    return "";
  }
  
  function Users() {
    return "";
  }