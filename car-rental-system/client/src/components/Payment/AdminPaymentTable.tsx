import axios from 'axios';
import React, {  useState,useEffect } from 'react'


export default function AdminPayments() {

  const [pay, setPayment] = useState<any[]>([]);

  
  useEffect(() => {
    axios.get("http://localhost:5000/api/payments/")

    .then(res => {   
        setPayment(res.data);
        
    })
    .catch(err => {
      console.log(err);
    })

  })


  

    return (
      
        <div>
          
              
           
          <div>
            
            <div className="container-fluid pt-4 px-4" >
            <h1 className='text-center' style={{"marginTop":"50px","marginBottom":"50px","color":"white","fontFamily":"fantasy"}}> All Payments Done By Users</h1>
                <div className="bg-secondary text-center rounded p-4" >
                    <div className="d-flex align-items-center justify-content-between mb-4" >
                        
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0" >
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Payment Id</th>
                                                <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Booking Id</th>
                                                <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Name</th>
                                                <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Card </th>
                                                <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Amount</th>
                                                <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Contact Number</th>
                                                <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Date</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                            {pay.map(dm=>(
                            <tr key={dm.payment_id}>
                               <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.payment_id}</td>
                                                    <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.booking_id}</td>
                                                    <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.name}</td>
                                                    <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.card}</td>
                                                    <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.cost_per_day}</td>
                                                    <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.contact_number}</td>
                                                    <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.createdAt}</td>

                               
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