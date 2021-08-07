import React, {Component} from 'react';
import { ProductConsumer } from '../../../../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import { Fragment } from 'react';
import Blog from '../Blog'


export default class Details extends Component{
    render(){
        return(
            <Fragment>
            <Blog />
            <ProductConsumer>
               
                {(value) => {
                  const {id,company,img,info,price,title,inCart} = value.detailProduct;
                  return(
                      <div className="container py-5">
                          {/* title */}
                     
                      {/* End of title */}
                      {/* Product info */}
                      <div className="row">
                          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <img src={img} className="img-fluid" alt="product"/>
                          </div>
                          {/* Product text */}
                          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2 className="ttile">model : {title}</h2>  
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by: <span className="text-uppercase">
                                    {company}
                                    </span>
                                    
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price:<span>Rs.</span>
                                        {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    some info about the product:
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                {/* buttons */}
                                <div>
                                    <Link to="/customer/dining/">
                                        <ButtonContainer>
                                            back to products
                                        </ButtonContainer>
                                    </Link>
                                   
                                </div>
                          </div>
                      </div>
                      </div>
                  )
                }}
            </ProductConsumer>
            </Fragment>
        );
    }
}