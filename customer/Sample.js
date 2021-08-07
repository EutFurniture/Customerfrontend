import React from 'react'
import { Component } from 'react';

export default class Sample extends Component{
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
              {  items.map((item) => {
                  <div className="col-12 col-sm-6 col-lg-4 mb_80" key={item.product_id}>
                   <div className="card">
                         <div className="card_img">
                               <img src={item.image} />

                         </div>
                         <div className="card_body">
                               <h2>{item.product_name}</h2>
                               <p>{item.price}</p>

                         </div>

                   </div>
                  </div>
            })  }
            </div>
          
      )
       }
}
