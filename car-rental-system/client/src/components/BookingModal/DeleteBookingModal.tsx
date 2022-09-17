import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function DeleteBookingModal() {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
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
                    <Button variant="success" >
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
