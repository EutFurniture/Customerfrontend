import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../../../../data';
import { ProductConsumer } from '../../../../context';
import Modal from './Modal';
import Footer from'../../Footer'
import Blog from '../Blog';
export default class ProductList extends Component{
    state={
        products: storeProducts
    };
    render(){
       

        return(
            <React.Fragment>
           <Blog />
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
               <Footer />
            </React.Fragment>
              // <Product />
            
        );
    }
}