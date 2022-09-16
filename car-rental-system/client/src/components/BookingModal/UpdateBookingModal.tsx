import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

export default function UpdateBookingModal() {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);
    return (
        <>
            <button type="button" className="btn btn-primary btn-floating booking-btn2" onClick={handleShow}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">Update Booking Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  >
                        <div className='row justify-content-center'>
                            <Col sm={3}>
                                <fieldset>
                                    <Form.Group >
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZZBzLh0tpsFysBbq__xw0sFY7JLyyAN1fQ&usqp=CAU" className='img-fluid rounded' alt='' style={{ width: '300px', height: 'auto', float: 'left', marginBottom: '10px' }} />
                                    </Form.Group>


                                </fieldset>
                            </Col>
                        </div>
                        <Col sm={10}>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3">
                                    Your Name
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="Enter Your Name "  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3" >
                                    Your Address
                                </Form.Label>
                                <Col sm="7" >
                                    <Form.Control type="text" placeholder="Enter Your Address"  />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3">
                                    Your Contact Number
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="Enter Your Contact Number"/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3"  >
                                    Type of Service
                                </Form.Label>
                                <Col sm="3">
                                    <Form.Control type="text" placeholder="Type of Service" />
                                </Col>
                                <Col sm={3}>
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} >
                                        <option selected>Select Type of Service</option>
                                        <option value="Self Drive">Self Drive</option>
                                        <option value="With Driver">With Driver</option>
                                    </select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3">
                                    Selected Model
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="Enter Selected Model" />
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">
                                    No of days
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="Enter No of Days" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">
                                    Location
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="Enter Location" />
                                </Col>
                            </Form.Group>


                        </Col>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">
                        Update Booking Details
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
