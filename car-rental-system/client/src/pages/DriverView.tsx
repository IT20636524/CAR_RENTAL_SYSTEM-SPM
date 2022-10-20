import React, { useEffect, useState , } from 'react'
import axios from 'axios';
import { useParams  } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchStaff from '../components/StaffModal/SearchStaff';
import Feedback from '../components/StaffModal/Feedback';



// import StaffRatings from '../components/modal/StaffRatings';

export default function DriverView() {
 

          // Get ID from URL
const params = useParams()
    
const [posts, setPosts] =useState<any>([]);
// const [staff, setStaff] = useState<any[]>([]);

// const [image , setImages] = useState("");

    
const PF = "http://localhost:5000/images/"

    useEffect(()=> {
        axios.get(`http://localhost:5000/api/staff/${params.driver_code}`)
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
 
    return (
      <div className=' background-radial-gradient' >
      <Header/>
      
        <div  >
                         
                                <div className="card-body">
                                    <h2 className='text-center warning' style={{color:"white"}}>HI I AM {posts.driver_name}</h2>
                                    <div className="container mb-6 mt-3">
                                        <div className="row d-flex align-items-baseline">
                                        <div className="col-xl-8"></div>
                                        <hr />
                                        <div className="container px-4">
            </div>





<section className=" text-center text-lg-start">
  <div className="card mb-3">
    <div className="row g-0 d-flex align-items-center">
      <div className="col-lg-4 d-none d-lg-flex">
        <img src={PF+posts.image} alt="Trendy Pants and Shoes"
          className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" 
          style={{height:"300px"}}/>
      </div>
      <div className="col-lg-8">
        <div className="card-body py-5 px-md-5">

          <p style={{color:"#191970",fontSize:"21px",fontStyle:"italic",fontWeight:"bold"}}>{posts.note}</p> 

        </div>
      </div>
    </div>
  </div>
</section>

<br/>
<br/>
<br/>


<div className="container">
  <div className="row">
    <div className="col-sm">
    <label style={{fontSize:"20px",color:"#9FA6B2"}}><i className="far fa-user  " style={{marginRight:"10px", color:"#9FA6B2"}}></i>NAME</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"white",marginLeft:"30px"}}>{posts.driver_name}</p>
      
      <label style={{fontSize:"20px",color:"#9FA6B2"}}><i className="fas fa-map-marker-alt" style={{marginRight:"10px",color:"#9FA6B2"}}></i>ADDRESS</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"white",marginLeft:"30px"}}>{posts.address}</p>

      <label style={{fontSize:"20px",color:"#9FA6B2"}}><i className="fas fa-phone-alt " style={{marginRight:"10px",color:"#9FA6B2"}}></i>CONTACT NUMBER</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"white",marginLeft:"30px"}}>{posts.contact_number}</p>
    </div>
    <div className="col-sm">
    <label style={{fontSize:"20px",color:"#9FA6B2"}}><i className="fas fa-user-friends" style={{marginRight:"10px",color:"#9FA6B2"}}></i>GENDER</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"white",marginLeft:"30px"}}>{posts.gender}</p>
       

      <label style={{fontSize:"20px",color:"#9FA6B2"}}><i className="fas fa-user-tie " style={{marginRight:"10px",color:"#9FA6B2"}}></i>LICENSE NO</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"white",marginLeft:"30px"}}>{posts.driving_license_no}</p>

      <label style={{fontSize:"20px",color:"#9FA6B2"}}><i className="fas fa-male  " style={{marginRight:"10px",color:"#9FA6B2"}}></i>EXPERIENCE</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"white",marginLeft:"30px"}}>{posts.experience}</p>
    </div>
  </div>
</div>
     

     <Feedback/>





 
   
     

      
        
      </div>
      
       
       
          

       
     

  



                        
  
                  
                                
                                    </div>
                                </div>
                                <br />


                            </div>
<Footer/>


                            </div>      
                           
               

    )
}