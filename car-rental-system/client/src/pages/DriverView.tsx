import React, { useEffect, useState , } from 'react'
import axios from 'axios';
import { useParams  } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchStaff from '../components/StaffModal/SearchStaff';



// import StaffRatings from '../components/modal/StaffRatings';

export default function DriverView() {
 

          // Get ID from URL
const params = useParams()
    
const [posts, setPosts] =useState<any>([]);
const [staff, setStaff] = useState<any[]>([]);

const [image , setImages] = useState("");

    
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
      <div >
      <Header/>
      
        <div className='background-radial-gradient' >
                         
                                <div className="card-body">
                                    <h2 className='text-center warning' style={{color:"white"}}>HI I AM {posts.driver_name}</h2>
                                    <div className="container mb-6 mt-3">
                                        <div className="row d-flex align-items-baseline">
                                        <div className="col-xl-8"></div>
                                        <hr />


                        <div className="container px-4">
  <div className="row gx-1" >
    <div className="col">
    <div   className="card-img-top " style={{ marginLeft:"30px",marginBottom:"40px", width: "15rem", height: "25rem",marginTop:"30px" }}>
                            <img  src={PF+posts.image}  className='img-fluid rounded border border-5' style={{height:"300px", width:"200px",marginLeft:"20px", marginTop:"10px"}}alt=''  />
                           
                            </div>
                            <br/>

                            {/* <div className='heart-btn'>
                             <div className='heart-content'>
                                <span className='heart'><i className="fas fa-heart  fa-lg"></i></span>
                                <SearchStaff/>
                                </div>
                            </div> */}
    </div>
    <div className="col">
    <div   className="card-img-top col-xl-3">

      <label style={{fontSize:"15px",color:"black"}}><i className="far fa-user  " style={{marginRight:"10px", marginTop:"50px",color:"black"}}></i>NAME</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"black"}}>{posts.driver_name}</p>
      
      <label style={{fontSize:"15px",color:"black"}}><i className="fas fa-map-marker-alt" style={{marginRight:"10px",color:"black"}}></i>ADDress</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"black"}}>{posts.address}</p>

      <label style={{fontSize:"15px",color:"black"}}><i className="fas fa-phone-alt " style={{marginRight:"10px",color:"black"}}></i>CONTACT NUMBER</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"black"}}>{posts.contact_number}</p>

      <label style={{fontSize:"15px",color:"black"}}><i className="fas fa-user-friends" style={{marginRight:"10px",color:"black"}}></i>GENDER</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"black"}}>{posts.gender}</p>
       

      <label style={{fontSize:"15px",color:"black"}}><i className="fas fa-user-tie " style={{marginRight:"10px",color:"black"}}></i>LICENSE NO</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"black"}}>{posts.driving_license_no}</p>

      <label style={{fontSize:"15px",color:"black"}}><i className="fas fa-male  " style={{marginRight:"10px",color:"black"}}></i>EXPERIENCE</label>
      <p style={{fontSize:"30px",fontFamily:"monospace",color:"black"}}>{posts.experience}</p>
 
        </div>
    </div>
    <p style={{color:"#191970",fontSize:"21px",fontStyle:"revert"}}>{posts.note}</p>  
  </div>
</div>


                        
  
                  
                                   
                                        </div>
                                    </div>
                                </div>
                                <br />


                            </div>
<Footer/>


                            </div>      
                           
               

    )
}