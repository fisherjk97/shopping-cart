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


  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;