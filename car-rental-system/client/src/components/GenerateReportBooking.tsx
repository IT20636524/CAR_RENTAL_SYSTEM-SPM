import React, { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import ReactToPrint from 'react-to-print';
import AcceptedBookings from './AcceptedBookings';
import AcceptedBookingHeader from './AcceptedBookingHeader';


export default function GenerateReportBooking(props: any) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    const [radio, setRadio] = useState('false')

    const componentRef = useRef(null);


    return (
        <>
            <Button className="btn btn-info reportBtn btn-grad" variant="primary" onClick={handleShow}>
                Generate Report
            </Button>

            <Modal show={show}
                onClick={handleClose}
                size="lg"
                centered
            >
                <Modal.Header closeButton >

                    <Modal.Title id="contained-modal-title-vcenter">Bookings Report</Modal.Title>

                </Modal.Header>
                <Modal.Body>

                    <div ref={componentRef}>
                        <AcceptedBookingHeader/>
                        <AcceptedBookings />

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <ReactToPrint
                        trigger={() => <Button variant="primary" style={{ "width": "300px", "height": "40px", "color": "white", borderRadius: "50px", background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%" }}>
                            Print Report
                        </Button>}
                        content={() => componentRef.current}


                    />

                    {/* <Button variant="primary" onClick={handlePrint} >
                        Print Report
                    </Button> */}
                    {/* <Button variant="danger" onClick={handleClose} >
                        Cancel
                    </Button> */}

                </Modal.Footer>
            </Modal>

        </>
    );
}