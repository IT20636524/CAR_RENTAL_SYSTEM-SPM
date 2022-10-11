import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';



const SearchPayment = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [pay, setPayment] = useState<any[]>([]);
  const [state, setState] = useState("");
  const [payment_id, setPaymentId] = useState("");
  const [booking_id, setBookingId] = useState("");
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [cost_per_day, setAmount] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  
  const fetchPayment = async () => {

    const res = await axios.get(`http://localhost:5000/api/payments/`+ payment_id)
    const pays = res.data
    setName(pays.name);
    setPaymentId(pays.payment_id);
    setAmount(pays.cost_per_day);
    setContactNumber(pays.contact_number);
    setName(pays.name);
    setCreatedAt(pays.createdAt);
    setBookingId(pays.booking_id);
   
    console.log(pays)

  }

  function searchId(e:any) {
   
    if (e.keyCode === 13) {
      fetchPayment()
        console.log(pay)   
        
      setShow(true)
    }
  }
  




  return (
    <>
      <div className="d-none d-md-flex ms-4">
        <input className="form-control bg-dark border-1" type="search" placeholder="Search" onChange={(e)=>setPaymentId(e.target.value)} value={payment_id} onKeyDown={searchId} style={{ backgroundColor: "#8c9399!important", color: "white" }} />
      </div>
      <Modal show={show}
        onHide={handleClose}
        size="lg"
        centered

      >

        <Modal.Header closeButton style={{ backgroundColor: "grey" }}>
        
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: "grey" }}>
          <div className="container" >
            <div className="row">
             
                <div key={payment_id} className="card">
                  <div className="card-body">
                    <h2 className='text-center'>payment Details</h2>
                    <div className="container mb-6 mt-3">
                      <div className="row d-flex align-items-baseline">
                        <div className="col-xl-8"></div>

                        <hr />
                      </div>


                      <div className="container" >
                        <p style={{ color: "#7e8d9f", fontSize: "20px" }}>Invoice---<strong>ID: {payment_id}</strong></p>

                        <div className="col-md-12">
                          <div className="text-center">
                            <img
                              src="data:image/png;base64,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"
                              height="25"
                              alt="logo"
                              loading="lazy"
                            />

                            <p className="pt-0">GoRent.com</p>
                          </div>
                          <br />
                        </div>


                        <div className="row">
                         
                          <div className="col-xl-7">
                            <p className="text-muted">Invoice</p>
                            <ul className="list-unstyled">
                              <li className="text-muted"><i className="fas fa-circle" style={{ color: "#84B0CA" }}></i> 
                            
                              <span
                                className="fw-bold">Creation Date: </span>{createdAt}</li>
                              <li className="text-muted"><i className="fas fa-circle" style={{ color: "#84B0CA" }}></i>
                               <span
                                className="me-1 fw-bold">Status:</span><span className="badge bg-warning text-black fw-bold">
                                  Paid</span></li>
                            </ul>
                          </div>
                        </div>

                        <div className="row my-2 mx-1 justify-content-center">
                          <table className="table table-striped table-borderless">
                            <thead style={{ backgroundColor: "#84B0CA" }} className="text-white">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Booking Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Amount</th>
                              
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">{payment_id}</th>
                                <th>{booking_id}</th>
                                <td>{name}</td>
                                <td>{contact_number}</td>                   
                                <td>{cost_per_day}</td>
                              </tr>

                            </tbody>

                          </table>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
             
            </div>
          

          </div>
        </Modal.Body>

      </Modal>


    </>
  );
}
export default SearchPayment;
