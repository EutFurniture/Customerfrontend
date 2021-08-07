import React, {Component} from 'react';
import { Fragment } from 'react';
import {Link,Switch,Route, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import Cart from './Cart'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

export default class Navbar extends Component{
    render(){
        return(
            <Fragment>
             <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               {
                   /* */
               }
               
               <ul className="navbar-nav.align-items-center">
                   <div className="nav-item ml-5">
                       <Link to="/product" className="nav-link">
                           Products
                       </Link>
                   </div>
               </ul>
               <Link to='/cart' className='ml-auto'>
                   <ButtonContainer>
                       <span className="mr-2">
                       <AddShoppingCart />
                       </span>
                       My Cart
                   </ButtonContainer>
               </Link>
           </NavWrapper>


       </Fragment>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainWhite);
    .nav-link{
        color:var(--mainBlack) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`;
