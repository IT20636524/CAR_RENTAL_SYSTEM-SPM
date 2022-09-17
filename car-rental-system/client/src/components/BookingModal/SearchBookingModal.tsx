import { MDBCol } from 'mdb-react-ui-kit'
import React from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'

export default function SearchBookingModal() {
    return (
        <>
            <>
                <Modal.Header>
                    <div className="col-md-12 text-center">
                        <Modal.Title id="contained-modal-title-vcenter">Student Details</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <fieldset>
                            <Form.Group as={Col} className="p-2 bd-highlight">
                                <Col>
                                    <Form.Label as="legend" column sm={2}>
                                        Student_Image
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
                                Full Name
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Enter your Full Name "  />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Age
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="Enter your age" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Gender
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="Enter your gender"  />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                School
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Enter your School" />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email Address
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="Email" placeholder="Enter your  Email Address"  />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Address
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="textarea" placeholder="Enter your Address"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Phone Number
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="tel" placeholder="Enter your Phone Number" maxLength={10} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Grade
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Enter your Grade"/>
                            </Col>
                        </Form.Group>

                    </Form>

                </Modal.Body>


            </>
        </>
    )
}
