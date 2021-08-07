import React,{Fragment,useEffect,useState} from 'react';
import Footer from './Footer';
import './profile.css';
import Blog from './blog/Blog';
import Axios from 'axios';
import { useParams } from "react-router-dom";
export default function Profile(userData) {
  const [user,setUser]=useState([])
  const { id } = useParams();
  useEffect(()=>{
    Axios.get('http://localhost:3001/profile',{params:{id:userData}}).then((response)=>{
     setUser(response.data)
    })
  },[])
    return (
     
      <Fragment>
       
       <Blog />
       
        <div className="contain">
           <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                 
                    <img src="../../images/user.jpg" alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4>Gajani Kangesan</h4>
                      <h6>Points:10</h6>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.fname}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {user.email}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {user.phone}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Password</h6>
                    </div>
                    <div id="size"class="col-sm-9 text-secondary">
                     {user.password}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <button class="btn btn-info " target="__blank">Edit</button>
                    </div>
                  </div>
                </div>
              </div>

        </div>
    
    </div>   
    <Footer />
    </Fragment>
    )
}
