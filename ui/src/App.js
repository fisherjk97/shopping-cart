import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { NavBar } from "./components/Navbar"
import { ProductCard } from "./components/ProductCard"
//CSS
import './App.css';
import {Container, Row, Col} from "react-bootstrap"

const apiUrl = `http://localhost:8080`;


export const Beverage = () => (
  <div>

    Your Shopping Cart <FontAwesomeIcon icon={faShoppingCart} /> is empty!
  </div>
)


class App extends Component {

  
  
  state = {
    users: [],
    products: [],
    cart: []
  };




  
  /*
  async createUser() {
    await axios.get(apiUrl + '/user-create');
    this.loadUsers();
  }

  async loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    this.setState({
      users: res.data
    });
  }
  */


  async getProducts() {
    await this.init(10);
  }

  componentDidMount() {
    this.getProducts();
  }

  init(n){

    var data = [];
    for(var i = 0; i <  n; i++){
      var product = (
        { id: i+1 , 
          name: "Product " + (i + 1),
          description: "This is a toy",
          price: 49.99
        });
  
        data.push(product);
    }
    this.setState({
      products: data
    });
  }
  


  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">


          <Container>
            <Row >
              {
              this.state.products.map(product => (
                <Col xs="12" sm="12" md="6" lg="3" >
                    <ProductCard  name={product.name} price={product.price} description={product.description}/>
                </Col>

              ))}
              
            </Row>
        </Container>
        </header>
      </div>
    );
  }
}

export default App;