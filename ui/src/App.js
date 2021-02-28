import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { NavigationBar } from "./components/Navbar"

//CSS
import './App.css';

const apiUrl = `http://localhost:8080`;

export const Beverage = () => (
  <div>

    Your Shopping Cart <FontAwesomeIcon icon={faShoppingCart} /> is empty!
  </div>
)


class App extends Component {
  state = {
    users: []
  };

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

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Beverage></Beverage>
          <button onClick={() => this.createUser()}>Create User</button>
          <p>Users list:</p>
          <ul>
            {this.state.users.map(user => (
              <li key={user._id}>id: {user._id}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;