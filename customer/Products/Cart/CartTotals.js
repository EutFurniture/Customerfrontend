import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import'../../../../App.css'
export default function CartTotals({value}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart}=value;
    const[radio,setRadio]=useState("delivery");
        
    
    return (
   
        <div className="container2">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-3 ml-md-2 col-sm-8 text-capitalize text-right">
                 <Link to='/customer/product/'>
                     <button id ="cart-to" className="btn btn-primary text-uppercase mb-2 px-2 mr-2" type="button" 
                     onClick={()=> clearCart()}
                     >
                     clear cart
                     </button>
                 </Link>
                 {/* <h5>
                     <span className="font-weight-bold text-left ">
                        Order delivery methods:
                     </span>
                    <input type="radio" onChange={(e)=>{setRadio(e.target.value)}}className='radio mr-3' value="delivery" />Online delivery
                    <br />
                     <input type="radio" onChange={(e)=>{setRadio(e.target.value)}}className='radio ' value="not"/>direct purchases
                    
                    
                 </h5> */}
                 <h5>
                     <span className="font-weight-bold  mr-5">
                         subTotal:
                     </span>
                     <strong>Rs{cartSubTotal}</strong>
                 </h5>
             <h5>
                     <span className="font-weight-bold mr-5 ">
                      tax:
                     </span>
                     <strong className="mr-2">Rs{cartTax}</strong>
    </h5>
                 <h5>
                     <span className="font-weight-bold mr-5">
                         total:
                     </span>
                     <strong>Rs{cartTotal}</strong>
                 </h5>
                 <button  id ="cart-to"  className="btn btn-primary text-uppercase mb-2 px-3 mr-2"><Link  to='/checkout' className="payment">Payhere</Link></button>
                </div>
            </div>
        </div>
    
    );
}
