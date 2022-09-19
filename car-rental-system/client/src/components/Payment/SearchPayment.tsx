import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import PaymentInvoice from './PaymentInvoice';
import BookingCard from './BookingCard';


export default function SearchPayment() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  function searchId(e: React.KeyboardEvent<HTMLInputElement>){
    if(e.keyCode===13){
      setShow(true);
    }
  }


  return (
    <>
      <form className="d-none d-md-flex ms-4">
                    <input className="form-control bg-dark border-1" type="search" placeholder="Search" onKeyDown={(e) => searchId(e) } style={{backgroundColor:"#8c9399!important", color:"white"}}/>
                </form>
  <Modal show={show}   
      onHide={handleClose}     
        size="lg"
        centered
        
      >

<Modal.Header closeButton style={{backgroundColor:"grey"}}>
        <Modal.Title>
            <h2 className='float-center'>Payment And Booking Details</h2>
        </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{backgroundColor:"grey"}}>
        <div className="container" >
                    <div className="row">
                        

                            <PaymentInvoice />
                        
                            </div>
                        <br /><br />
                        <div style={{marginLeft:"100px"}}>
                            <BookingCard />
                       
                    </div>

                </div>
      </Modal.Body>

      </Modal>
      

    </>
  );
}