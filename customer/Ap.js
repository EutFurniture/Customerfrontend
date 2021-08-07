import React ,{useState} from 'react';
//import './App.css';
import './Products/product.css'
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';

class Ap extends Component{
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


 
   
  render(){
    const { items } = this.state;
      return (
       
        <div className="row">
      
          {items.map(item => (
            <div className="col-9 col-sm-6 col-lg-3 mb_80" key={item.product_id}>
               <div className="card">
               <div className="card_img">
               
                     <img src={item.image}  />
                    
                
              
              </div>
               
            
             <div className="card_body">
                 <h2>{item.product_name}</h2>
                 <div className="price">
                   <span>{item.currency}</span>
                     <h4>{item.price}</h4>
                  </div>
                  <div className="cta_group">
                <div className="button_atc"> Add To Cart</div>
              </div>
    
              </div> 
               </div> 
            </div>
          ))}
        </div>
      );
    }
  
  }

export default Ap