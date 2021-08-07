import React from 'react'
import { Fragment } from 'react';
import './mad.css';
import Footer from './Footer';
import Blog from './blog/Blog'
export default function  History () {
    return (
        <Fragment>
        <Blog />
        <div class="details">
           <h3>Order History</h3>  
                    <table class="tbl2 content-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th> Quantity </th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>05/07/2021</td>
                                <td><img className="image"src="../../images/c2.jpg" /></td>
                                <td>Wooden set</td>
                                <td>1</td>
                                <td>Rs.8000</td>
                                <td>Not Deliver</td>
                            </tr>
                            <tr>
                                <td>10/04/2021</td>
                                <td><img src="../../images/d1.jpg" /></td>
                                <td>Wooden set</td>
                                <td>1</td>
                                <td>Rs.25000</td>
                                <td>Delivered</td>
                            </tr>
                            
                        </tbody>
                    </table>

                </div>
                <Footer />
                </Fragment>


      
    )
}
