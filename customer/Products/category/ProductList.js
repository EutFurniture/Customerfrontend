import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Product from './Product';
import {storeProducts} from '../../../../data';
import { ProductConsumer } from '../../../../context';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Cart from '../Cart'
import Blog from '../../blog/Blog'
//import { Navbar } from 'react-bootstrap';
import Navbar from '../Navbar';
import styled from 'styled-components';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
export default class ProductList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        };
      }
      componentDidMount()  {
        fetch('http://localhost:3001/pposts')
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              items: result
            });
          });
      }
      state={
        products: storeProducts
    };
  
    render(){
     
       
       
         
  
          return(
              <React.Fragment>
             <Blog />
             <Navbar />
                  <div className="py-5">
                  <Title name="Dinnig" title="sets"/>
                      <div className="container">
                         
                          
                          <div className="row">
                          <ProductConsumer>
                              {
                                  value => {
              
                                      return value.products.map(product => {
                                      return <Product key={product.id} product = {product} />;
                                  })
                                      
                                  }
                              }
                          </ProductConsumer>    
                          </div>
                      </div>
                  </div>
                 
              </React.Fragment>
                // <Product />
              
          );
      }
  }
