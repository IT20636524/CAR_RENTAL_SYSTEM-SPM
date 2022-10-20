import React  from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import AdminSideNav from '../components/AdminSideNav'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../components/styles.css"
import { Link } from 'react-router-dom';




export default function ContactUs() {


  // const [messege_code, setMessegeCode] = useState("");
  const [customer_name, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [messege, setMessege] = useState("");

  
  const userData ={
    // messege_code,
    customer_name,
    email,
    messege,
  }
  


  function submitForm(e: { preventDefault: () => void; }){
    e.preventDefault();
    if(customer_name.length === 0 || email.length === 0 || messege.length === 0  ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else{
      console.log(userData);
      axios.post("http://localhost:5000/api/contactus/add",userData)
      .then(function (response) {
        console.log(response);
        setCustomerName("");
        setEmail("");
        setMessege("");

        swal({ text: "Successfully Added", icon: "success", buttons: {
          cancel: { text: 'Cancel' },
          confirm: { text: 'Confirm' },
        } })
        .then((value) => {
          window.location.href = '/';
          
      });
      })
      .catch(function (error) {
        console.log(error);
       
        })
        // window.location.replace(`/vehicledetails/${vid}`);
       
       
      // .catch(function (error) {
      //   console.log(error);
      //   alert("not added");
      // });
    }
    
  }

    return (
       
       
    
      
<section className="vh-100">

  <Header />
      <div
        className="hpimage"
        style={{
          backgroundImage: "", backgroundRepeat: "no-repeat", WebkitBackgroundSize: "cover", backgroundSize: "cover"
        }}
      >

        <div id="carouselExampleInterval" className="carousel slide" data-mdb-ride="carousel" style={{ alignContent: "center" }}>
          <div className="carousel-inner">

            <div className="carousel-item active" data-mdb-interval="2500">
              <img src="https://global.toyota/pages/models/images/20191018/kv/yaris_w1920_01.jpg" className="d-block w-100" style={{ height: "500px", opacity: "0.7" }} alt="Exotic Fruits" />
              <div className="carousel-caption d-none d-md-block">
                <h1>Send Your Inquiries</h1><br />
                <p className="fst-italic"><h4>Please get in touch using one of the option below. You will recieve a response within 24 hours by email.</h4></p>
              </div>
            </div>


            <div className="carousel-item" data-mdb-interval="2500">
              <img src="https://global.toyota/pages/news/images/2019/12/20/0001/20191220_01_kv_w1920.jpg" className="d-block w-100" style={{ height: "500px", opacity: "0.7" }} alt="Wild Landscape" />
              <div className="carousel-caption d-none d-md-block">
                <h1>Send Your Inquiries</h1><br />
                <p className="fst-italic"><h4>Please get in touch using one of the option below. You will recieve a response within 24 hours by email.</h4></p>
              </div>
            </div>

            <div className="carousel-item" data-mdb-interval="2500">
              <img src="https://global.toyota/pages/models/images/mirai/mirai_w1920_02.jpg" className="d-block w-100" style={{ height: "500px", opacity: "0.7" }} alt="Camera" />
              <div className="carousel-caption d-none d-md-block">
                <h1>Send Your Inquiries</h1><br />
                <p className="fst-italic"><h4>Please get in touch using one of the option below. You will recieve a response within 24 hours by email.</h4></p>
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <section id="hero" className="hero d-flex align-items-center">

          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">


                

    <div className="container h-130" style={{"marginTop":"50px"}}>
    <div className="row d-flex h-100">
      <div className="col-lg-9 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-3">
            <div className="row justify-content" style={{"marginLeft":"60px" , "marginBottom":"20px"}}>
              <div className="col-md-8 "> 
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-2 mt-4" style={{"marginLeft":"100px" , "marginBottom":"20px"}} >Contact Us</p>
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">


<div className="row">

    
    <div className="col-md-12">
        <div className="md-form mb-0" onSubmit={submitForm} style={{width:"400px"}}>
            <input type="text" id="name" name="name" className="form-control" value={customer_name} onChange={(e)=>setCustomerName(e.target.value)}/>
            <label htmlFor="name" className="">Your name</label>
        </div>
    </div>
</div>

<br/>

<div className="row">
    <div className="col-md-12">
        <div className="md-form mb-0" style={{width:"400px"}}>
            <input type="text" id="subject" name="subject" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="subject" className="">Your email</label>
        </div>
    </div>
</div>

<br/>

<div className="row">

  
    <div className="col-md-12">

        <div className="md-form" style={{width:"400px"}}>
            <textarea typeof="text" id="message" name="message"  className="form-control md-textarea" value={messege} onChange={(e)=>setMessege(e.target.value)} style={{height:"100px"}} ></textarea>
            <label htmlFor="message">Your message</label>
        </div>

    </div>
</div>

<br/>

<Button  className='contactusbtn' type="submit"  onClick={(e) => { submitForm(e);}}  style={{height:"40px", width:"50%"}}>
                     Send
                  </Button>





                  <div className="container" style={{marginTop:"20px",marginLeft:"70px"}}>
          <div className="row g-2">
          <div className="col-3">
<a style={{color: "#3b5998"}}
  ><i className="fab fa-facebook-f fa-lg"></i
></a>
</div>

<div className="col-3">
<a style={{color: "#55acee"}}
  ><i className="fab fa-twitter fa-lg"></i
></a>
</div>

<div className="col-3">
<a style={{color: "#dd4b39"}}
  ><i className="fab fa-google fa-lg"></i
></a>
</div>

<div className="col-3">
<a style={{color: "#ac2bac"}}
  ><i className="fab fa-instagram fa-lg"></i
></a>
</div>
</div>  
</div>     

</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200" style={{marginTop:"85px"}}>
              <div  className="row gy-6" >
        <table className="table" style={{marginLeft:"25px",fontSize:"60px"}}>
  <tbody>
  <tr>
    <td className="stftable">
    <div className="col-lg-9  p-4  border border-dark">
        
            <i className="bi bi-geo-alt "></i>
            <i className="fas fa-map-marker-alt fa-2x" style={{marginRight:"90px",marginBottom:"20px",color:"#1A237E"}}></i>
            <h3 style={{fontSize:"30px",fontFamily:"fantasy",marginRight:"60px"}}>Address</h3>
            <p style={{color:"black",fontStyle:"italic",marginRight:"50px"}}>GoRent Pvt(LTD)</p>
            <p style={{color:"black",fontStyle:"italic",marginRight:"10px"}}>1 st Lane,Colombo 7</p>
        </div>
            </td>

            <td className="stftable">
            <div className="col-lg-9 p-4  border border-dark" style={{width:"250px"}}>
     
             <i className="bi bi-telephone fas fa-phone-square-alt  fa-2x" style={{marginRight:"90px",marginBottom:"20px",color:"#1A237E"}}></i>
            <h3 style={{fontSize:"30px",fontFamily:"fantasy",marginRight:"60px"}}>Call Us</h3>
            <p style={{color:"black",fontStyle:"italic",marginRight:"40px"}}>01126395887</p>
            <p style={{color:"black",fontStyle:"italic",marginRight:"50px"}}>0715698336</p>
            </div>
            </td>
   </tr>

  <tr>
    <td className="stftable">
      <div className="col-lg-9 p-4  border border-dark"  >    
          <i className="fas fa-envelope fa-2x" style={{marginRight:"80px",marginBottom:"20px",color:"#1A237E"}}></i>
          <h3 style={{fontSize:"30px",fontFamily:"fantasy",marginRight:"60px"}}>Email Us</h3>
          <p style={{color:"black",fontStyle:"italic",marginRight:"40px"}}>hr@gorent.com<br/>contact@gorent.com</p>
        </div>
        </td>

        <td className="stftable">
        <div className="col-lg-9 p-4  border border-dark" style={{width:"250px"}}>
          <i className="fas fa-user-clock fa-2x" style={{marginRight:"80px",marginBottom:"20px",color:"#1A237E"}}></i>
          <h3 style={{fontSize:"30px",fontFamily:"fantasy",marginRight:"30px"}}>Open Hours</h3>
          
          <p style={{color:"black",fontStyle:"italic",marginRight:"50px",marginBottom:"45px"}}>24 Hours</p>
          </div>
        </td>
   
  </tr>

  </tbody>
    </table>
    </div>
              </div>
            </div>
          </div>

        </section>

       
        <section id="features" className="features">

          <div className="container" data-aos="fade-up">


            <div className="row">

              

              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">

                <section id="contact" className="contact">


     

</section>

                </div>
              </div>

            </div>

          </div>

        </section>
      </div>
      <br /><br />
  <Footer/>
  
</section>
 
    
       
          
    )
}

