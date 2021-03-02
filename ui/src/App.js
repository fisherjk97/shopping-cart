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

import { connect } from 'react-redux'

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
/*
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      postId: 2
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_POST',
      payload: { id: this.state.postId, title: this.state.value }
    })

    this.setState({ postId: this.state.postId + 1 })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.props.dispatch({
          type: 'LOAD_POSTS',
          payload: json
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </form>
          <ul>
            {this.props.posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </header>
      </div>
    )
  }
}
*/

/*
const mapStateToProps = state => {
  return { posts: state.posts }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
*/
export default App