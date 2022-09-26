import axios from 'axios';
import { MDBCol } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'

export default function SearchBookingModal({bookingId}:any) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const PF = "http://localhost:5000/image/"
    const [booking_id,setBookingId] =useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contact_number, setContactNumber] = useState("");
    const [type_of_service, setTypeOfService] = useState("");
    const [selected_model, setSelectedModel] = useState("");
    const [no_of_days, setNoOfDays] = useState("");
    const [location, setLocation] = useState("");
    const [vehicle_pic, setVehiclePic]=useState("");


    axios.get("http://localhost:5000/api/bookings/"+bookingId)
    .then(function(response){
        setBookingId(response.data['booking_id']);
        setName(response.data['name']);
        setAddress(response.data['address']);
        setContactNumber(response.data['contact_number']);
        setTypeOfService(response.data['type_of_service']);
        setSelectedModel(response.data['selected_model']);
        setNoOfDays(response.data['no_of_days']);
        setLocation(response.data['location']);
        setShow(true);
    })

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
                                <Form.Control type="text" placeholder="Booking Id " value={booking_id} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Name" value={name}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Address
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Address" value={address} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Contact Number
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Contact Number" maxLength={10} value={contact_number}/>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Type Of Service
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Type Of Service" value={type_of_service} />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Selected Model
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Selected Model" value={selected_model}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                No of Days
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="No of Days" value={no_of_days}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Location
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Location" value={location}/>
                            </Col>
                        </Form.Group>

                    </Form>

                </Modal.Body>


            </>
        </>
    )
}
