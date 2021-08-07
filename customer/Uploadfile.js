import React,{useState} from 'react'
import Axios from 'axios';
export default function () {
 let formData=new FormData();
      const onFileChange=(e) =>{
            console.log(e.target.files[0])
            if(e.target && e.target.files[0]){
                  formData.append('file',e.target.files[0]);
            }
      }
   const[address,setAddress]=useState("")
      const Submitfile =()=>{
             Axios.post('http://localhost:3001/uploadfile',
                   {formData,
                        address:address,
                  }
                 
             ).then(res=>{console.log(res);})
             console.log(formData.File);
      }
      return (
            <div>
                 <input type='file' name='file_upload' onChange={onFileChange} />
                 <input type='text' name='address' onChange={(event)=>{setAddress(event.target.value)}}/>
                 <button type="submit" onClick={Submitfile} >submit</button> 
            </div>
      )
}
