import React, {Component} from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'
import Navbar from './Products/Navbar';
import ProductList from './Products//category/ProductList';
import Detail from './Products/Details';
import Cart from './Products/Cart/Cart';
import Default from './Products/Default';
import Checkout from './Products/checkout/Checkout';
import Modal from './Products/Modal';



class Abc extends Component {
  render (){
    return(
      <React.Fragment>
        <BrowserRouter>
       
           <Navbar />
          
            <Switch>
              
              <Route exact  path="/" component={ProductList}/>
              <Route path="/detail" component={Detail}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/checkout" component={Checkout}/>
              
            </Switch>
            <Modal />
            </BrowserRouter>
       </React.Fragment>
     );
  }
}

export default Abc;
