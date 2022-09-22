import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';





export default function Staff() {
    


    const [staff, setStaff] = useState<any[]>([]);
    
    const [image , setImages] = useState("");

    
    const PF = "http://localhost:5000/images/"

  
  useEffect(() => {
    axios.get("http://localhost:5000/api/staff/")

    .then(res => {   
      
      setStaff(res.data);
      setImages(res.data['image'])
      

      console.log(res.data);
        
    })
    .catch(err => {
      console.log(err);
    })

  },[])
    
    

    return (
        <div>
            <Header/>
            <br /><br />
            
           

            <div className="container">
  <div className="Col row-col-4">
    <div className="row">
    

    {staff.map(stf=>(
      <Link to={`/${stf.driver_code}`} key={stf.driver_code} className="col-lg-3 credit-card ">
      
                        <div  className="card border border-dark " style={{ marginLeft:"70px",marginBottom:"40px", width: "15rem", height: "20rem" }}>
                            <div className="card-img-top">

                            
                            <img  src={PF+stf.image} className='img-fluid rounded border border-5' style={{height:"200px", width:"200px",marginLeft:"20px", marginTop:"10px" }}alt=''  />
                            {/* <img  src="https://www.pngkit.com/png/detail/20-204640_mens-formal-wear-png.png" className='img-fluid rounded' style={{height:"200px", width:"200px",marginLeft:"10px" }}alt=''  /> */}
                            </div>
                            <div className="card-body ">
                                <h5 className="card-title">{stf.driver_name}</h5>
                                <p className="card-text">{stf.contact_number}</p>
                                {/* <p className="card-text">{stf.note}</p> */}
                              
                                {/* <h3 className="card-text">{stf.price}</h3> */}
                               
                            </div>
                        </div>
                        </Link>
                    ))}
                    


      
    </div>
   
  </div>
</div>

            
          <Footer/>
           
            </div>

            )
}