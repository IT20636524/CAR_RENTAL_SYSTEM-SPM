import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';





export default function Staff() {
    


    const [staff, setStaff] = useState<any[]>([]);
    
    // const [image , setImages] = useState("");

    
    const PF = "http://localhost:5000/images/"

  
  useEffect(() => {
    axios.get("http://localhost:5000/api/staff/")

    .then(res => {   
      
      setStaff(res.data);
      // setImages(res.data['image'])
      

      console.log(res.data);
        
    })
    .catch(err => {
      console.log(err);
    })

  },[])
    
    

    return (
        <div className='background-radial-gradient'>
            <Header/>
            <br /><br />
            
           

            <div className="container">
  <div className="Col row-col-4">
    <div className="row">
    

    {staff.map(stf=>(
      <Link to={`/${stf.driver_code}`} key={stf.driver_code} className="col-lg-3 credit-card ">
      
                        {/* <div  className="card border staff-card" style={{ marginLeft:"70px",marginBottom:"40px", width: "15rem", height: "20rem" }}>
                            <div className="card-img-top">

                            
                            <img  src={PF+stf.image} className='img-fluid rounded border ' style={{height:"200px", width:"200px",marginLeft:"20px", marginTop:"10px" }}alt=''  />
                            </div>
                            <div className="card-body ">
                                <h5 className="card-title" style={{marginLeft:"25px",fontSize:"22px"}}>{stf.driver_name}</h5>
                                <p className="card-text" style={{marginLeft:"25px"}}>{stf.contact_number}</p>                
                            </div>    
                        </div> */}

                        <div className='spcontainer'>
                          <div className='spcard'> 
                           
                              <img  src={PF+stf.image} className='img-fluid rounded border ' style={{height:"400px",width:"400px", marginTop:"10px",borderRadius:"3px" }}alt=''  />
                              <div className='spintro'>
                              <h3>{stf.driver_name}</h3>
                              <p>{stf.contact_number}</p>
                              </div>
                          </div>
                        </div>








                        </Link>
                    ))}
                    


      
    </div>
   
  </div>
</div>
<br/>
<br/>

            
          <Footer/>
           
            </div>

            )
}