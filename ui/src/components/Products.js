import React, { useState, useEffect, Component } from "react";
import {Container, Row, Col} from "react-bootstrap"
import  ProductCard  from "./ProductCard"
import axios from 'axios';
const apiUrl = `http://localhost:8080`;

class Products extends Component {

    state = {
        products: []
    };

    async getProducts() {
        console.log("fetching products");
        //await this.init(10);
        const res = await axios.get(apiUrl + '/products');
            this.setState({
                products: res.data
            });
        console.log("done fetching products");
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

      componentDidMount() {
        this.getProducts();
      }



  render(){
  return (
       <Container>
           <section>
            <div className="banner-innerpage">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-12 align-self-center text-center">
                    <h1 className="title">Let's Get Shopping</h1>
                    
                </div>
                </div>
            </div>
            </div>
        </section>
            <Row >
              {
              this.state.products.map(product => (
                <Col xs="12" sm="12" md="6" lg="3" >
                    <ProductCard  name={product.name} price={product.price} description={product.description} hideButton={true}/>
                </Col>

              ))}
              
            </Row>
        </Container>
  );
};
}

export default Products;