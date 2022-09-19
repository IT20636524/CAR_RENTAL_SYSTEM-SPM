import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingDetails from '../components/Payment/BookingDetails';



export default function AddPayment() {

    const [booking_id, setBookingId] = useState("");
    const [payment_id, setPaymentId] = useState("");
    const [name, setName] = useState("");
    const [card, setCard] = useState("");
    const [amount, setAmount] = useState("");
    const [contact_number, setContactNumber] = useState("");
  
 
    
    const navigate = useNavigate();

    
    const PayData ={
        booking_id,
        payment_id,
        name,
        card,
        amount,
        contact_number,
    }
    
  
  
    function submitForm(e: { preventDefault: () => void; }){
      e.preventDefault();
      if(booking_id.length === 0 || name.length === 0 || card.length === 0|| amount.length === 0 || contact_number.length === 0  ){
        swal(" Fields Cannot empty !","Please enter all data !", "error");
      }else{
        console.log(PayData);
        axios.post("http://localhost:5000/api/payments",PayData)
        .then(function (response: any) {
          console.log(response);
          setBookingId("");
          setName("");
          setCard("");
          setAmount("");
          setContactNumber("");
          swal({ text: "Payment Successful", icon: "success",  buttons: {
            cancel: { text: 'Cancel' },
            confirm: { text: 'Confirm' },
          }}).then((res: any)=>{
            navigate(`/paymentview/${response.data.payment_id}`,{replace:true});
          })
         
          console.log(response.data)
        })
     
      }
      
    }

   
    
   

    return (
        <div>
              <Header/>
          <div
            className="hpimage"
            style={{
            backgroundColor:"light"}}
            >



<div className="container">
  <div className="row">
    <div className="col">

    <div className="card" style={{height:"660px",background: "linear-gradient(140deg, rgba(72, 115, 150, 1) 50%, rgba(57, 108, 150, 0.65) 65%, rgba(42, 102, 150, 0.6) 50%, rgba(27, 95, 150, 0.95) 80%, rgba(12, 88, 150, 1) 90%, rgba(0, 83, 150, 0.8) 70%)",marginTop:"50px"}}>
        <div className="card-body px-4 px-md-5">
    <section className="mb-4">

  
   



    
 
<h2 className="h1-responsive font-weight-bold text-center my-4" style={{color: "hsl(218, 81%, 95%)"}}>Place Your Installment Here...!!!</h2>


<div className="row">

    <div className="col-md-9 mb-md-0 mb-5" >
        <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={submitForm}>

        <div className="form-floating mb-3">
            <input className="form-control" id="bookingid" type="text" placeholder="Booking ID" value={booking_id} onChange={(e)=>setBookingId(e.target.value)}/>
            <label htmlFor="bookingid"  style={{fontSize:"16px"}} >Booking ID</label>
          
        </div>
<br />
        <div className="form-floating mb-3">
            <input className="form-control" id="name" type="text" placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="name" style={{fontSize:"16px"}}>Name</label>
           
        </div>
    <br />   
        <div className="form-floating mb-3">
            <input className="form-control" id="contact" type="text" placeholder="Contact Number"  value={contact_number} onChange={(e)=>setContactNumber(e.target.value)}/>
            <label htmlFor="contact" style={{fontSize:"16px"}}>Contact Number</label>
           
        </div>   
<br />
        <select className="form-select mb-4 text-grey" aria-label="Disabled select example" onChange={(e)=>setCard(e.target.value)}>
          <option selected style={{fontSize:"16px"}}>Select a Card</option>
          <option value="1">1234567812345678</option>
         
<br />
          {/* {subopt.map(card => {
                    // eslint-disable-next-line react/jsx-key
                    return <option value={card}>{card}</option>
                  })} */}
        </select>

    <br />  

        <div className="form-floating mb-3">
            <input className="form-control" id="amount" type="text" placeholder="Amount"  value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <label htmlFor="amount" style={{fontSize:"16px"}}>Amount</label>
           
        </div>

        </form>
   <br />  

        <div className="text-center">
       
        <Link to="/payment-view">
    <button type="button" className="btn btn-primary"style={{width:"400px"}} onClick={ submitForm}>
            Pay Now
            </button>
    </Link>

   
        </div>

       
        <div className="status"></div>
    </div>
  

   
</div>

</section>

</div></div>
    
    </div>
    <div className="col-5 mt-5" style={{ marginLeft: "80px" }}>
      <BookingDetails/>
    </div>
    <br />
  </div>
  </div>

             
             </div> 
              <Footer/>
             

        </div>
          
    )
}