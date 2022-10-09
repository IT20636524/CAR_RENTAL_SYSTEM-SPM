import React, { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import { useReactToPrint } from "react-to-print"
import AcceptedBookings from './AcceptedBookings';


export default function GenerateReportBooking(props: any) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    const [radio, setRadio] = useState('false')
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            <Button className="btn btn-info reportBtn btn-grad" variant="primary" onClick={handleShow}>
                Generate Report
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Bookings Report</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div ref={componentRef}>
                        <AcceptedBookings/>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handlePrint} >
                        Print Report
                    </Button>
                    <Button variant="danger" onClick={handleClose} >
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>

        </>
    );
}