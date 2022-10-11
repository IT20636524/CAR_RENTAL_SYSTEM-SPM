import React, {  useState,useEffect } from 'react'
import axios from'axios'
import Button from 'react-bootstrap/Button';
import AdminHeader from '../components/AdminHeader';
import AdminSideNav from '../components/AdminSideNav';
import AdminFooter from '../components/AdminFooter';





export default function AdminFeedback() {

  const [comment, setComment] = useState<any[]>([]);

  
  useEffect(() => {
    axios.get("http://localhost:5000/api/feedback/")

    .then(res => {   
        setComment(res.data);
        
    })
    .catch(err => {
      console.log(err);
    })

  })


  

    return (
      
        <div>
           
          <div>
            
            <div className="container-fluid pt-4 px-4" >
            <h1 style={{"marginLeft":"550px","marginTop":"50px","marginBottom":"50px","color":"white","fontFamily":"fantasy"}}>Feedback Details</h1>
                <div className="bg-secondary text-center rounded p-4" >
                    <div className="d-flex align-items-center justify-content-between mb-4" >
                        
                    </div>
                    <div className="table-responsive" >
                        <table className="table text-start align-middle table-bordered table-hover mb-0"  >
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col" style={{"fontSize":"20px","color":"white"}}>Code</th>
                                <th scope="col" style={{"fontSize":"20px","color":"white"}}>Comment</th>
                                
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                            {comment.map(co=>(
                            <tr key={co.feedback_code}>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{co.feedback_code}</td>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{co.comment}</td>
                                
                            </tr>
                            ))}
                        </tbody>

                        

                    </table>
                    
                    
                </div>
            </div>
                    

                </div>
                <br />
            
            
           </div>

        </div>
          
    )
}