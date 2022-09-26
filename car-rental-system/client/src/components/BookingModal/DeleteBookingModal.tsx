import axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import swal from 'sweetalert';

export default function DeleteBookingModal({booking_id,getData}:any) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [bookingId, setBookingId]=useState("");

    function submitForm(e:any){
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/bookings/delete/`+booking_id).then(function (response){
            swal({ text: "Booking Successfully Deleted", icon: "success"
              });
            getData()
            setShow(false);
        }).catch(function(error){
            console.log(error);
        });
    }   

    return (
        <>
            <button type="button" className="btn btn-danger btn-floating booking-btn3" onClick={handleShow}>
                <i className="fa-solid fa-trash"></i>
            </button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">Delete Booking Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Are you sure you want to delete this booking?</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type='submit' onClick={submitForm}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        No
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
