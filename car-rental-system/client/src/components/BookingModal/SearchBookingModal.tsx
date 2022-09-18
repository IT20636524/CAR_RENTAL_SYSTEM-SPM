import { MDBCol } from 'mdb-react-ui-kit'
import React from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'

export default function SearchBookingModal() {
    return (
        <>
            <>
                <Modal.Header>
                    <div className="col-md-12 text-center">
                        <Modal.Title id="contained-modal-title-vcenter">Booking Details</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <fieldset>
                            <Form.Group as={Col} className="p-2 bd-highlight">
                                <Col>
                                    <Form.Label as="legend" column sm={2}>
                                        Vehicle_Image
                                    </Form.Label>
                                </Col>

                                <Col sm={7}>
                                    <MDBCol lg='4' md='12' className='mb-4'>
                                        {/* <img src={PF + profile_pic} className='img-fluid rounded' alt='' /> */}
                                    </MDBCol>
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Booking id
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Booking Id "  />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Address
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Address"  />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Contact Number
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Contact Number" maxLength={10} />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Type Of Service
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Type Of Service"  />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Selected Model
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Selected Model"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                No of Days
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="No of Days" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Location
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Location"/>
                            </Col>
                        </Form.Group>

                    </Form>

                </Modal.Body>


            </>
        </>
    )
}
