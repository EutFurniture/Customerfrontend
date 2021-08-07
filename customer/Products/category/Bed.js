import React, {Component} from 'react';
import Product from './Product';
import Title from '../Title';
import {storeProducts} from '../../../../data';
import { ProductConsumer } from '../../../../context';
import Modal from '../Modal';
import Cart from '../Cart'
import Blog from '../../blog/Blog'
//import { Navbar } from 'react-bootstrap';
import Navbar from '../Navbar';
export default class Bed extends Component{
    state={
        products: storeProducts
    };
    render(){
        console.log(this.state.products);

        return(
            <React.Fragment>
           <Blog />
           <Navbar />
                <div className="py-5">
                <Title name="Beds" />
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
                <Modal />
            </React.Fragment>
              // <Product />
            
        );
    }
}