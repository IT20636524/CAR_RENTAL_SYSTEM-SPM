import axios from 'axios';
import React, {  useState,useEffect } from 'react'
import AddStaff from '../components/StaffModal/AddStaff';
import DeleteStaff from '../components/StaffModal/DeleteStaff';
import UpdateStaff from '../components/StaffModal/UpdateStaff';

export default function DriversManagemant() {

  const [staff, setStaff] = useState<any[]>([]);

  
  useEffect(() => {
    axios.get("http://localhost:5000/api/staff/")

    .then(res => {   
      setStaff(res.data);
        
    })
    .catch(err => {
      console.log(err);
    })

  })


  

    return (
      
        <div>
           
          <div>
            
            <div className="container-fluid pt-4 px-4" >
            <h1 style={{"marginLeft":"550px","marginTop":"50px","marginBottom":"50px","color":"white","fontFamily":"fantasy"}}>Driver Details</h1>
                <div className="bg-secondary text-center rounded p-4" >
                    <div className="d-flex align-items-center justify-content-between mb-4" >
                        
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0" >
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col" style={{"fontSize":"20px","color":"white"}}>Code</th>
                                <th scope="col" style={{"fontSize":"20px","color":"white"}}>Driver Name</th>
                                <th scope="col" style={{"fontSize":"20px","color":"white"}}>Address</th>
                                <th scope="col" style={{"fontSize":"20px","color":"white"}}>Contact </th>
                                <th scope="col" style={{"fontSize":"20px","color":"white"}}>Gender</th>
                                <th scope="col" style={{"fontSize":"20px","color":"white"}}>License No</th>
                                <th scope="col" style={{"fontSize":"20px","color":"white"}}>Experience</th>
                                <th scope="col" style={{"fontSize":"20px","color":"white"}}>Note</th>
                                
                                <th className="text-center" scope="col" style={{"fontSize":"20px","color":"white"}}>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                            {staff.map(dm=>(
                            <tr key={dm.driver_code}>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{dm.driver_code}</td>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{dm.driver_name}</td>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{dm.address}</td>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{dm.contact_number}</td>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{dm.gender}</td>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{dm.driving_license_no}</td>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{dm.experience}</td>
                                <td style={{"fontSize":"20px","fontFamily":"Arial-Black"}}>{dm.note}</td>
                                <td className="text-center">
                                <UpdateStaff driver_code={dm.driver_code}/>
                                <DeleteStaff driver_code={dm.driver_code}/>
                                
                                </td>
                            </tr>
                            ))}
                        </tbody>

                        

                    </table>
                    
                    
                </div>
            </div>
                    

                </div>
                <br />
            
                <AddStaff/>
           </div>

           
             

        </div>
          
    )
}