import React,{useState} from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './mad.css'
import { Fragment } from 'react';
function Mad() {
    const[modal,setModal]=useState(false);
    const toggleModal=()=>{
        setModal(!modal)
    }

    
    return (
        <Fragment>
        <button className="btn-modal" onClick={toggleModal}>open</button>
        <div className="modal">
          <div  className="overlay"></div>
          <div className="modal-content">
            <h2>ADD CATEGORY HERE</h2>
            
            <button className="close-modal" onClick={toggleModal}>
            <HighlightOffIcon/>
            </button>
          </div>
        </div>
       
       
    
        </Fragment>
    );
}

export default Mad
