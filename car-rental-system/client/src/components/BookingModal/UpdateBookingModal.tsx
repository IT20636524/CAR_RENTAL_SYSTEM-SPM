import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import swal from 'sweetalert';


export default function UpdateBookingModal({booking_id,getData}:any) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const [model, setModel] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contact_number, setContactNumber] = useState("");
    const [type_of_service, setTypeOfService] = useState("");
    const [selected_model, setSelectedModel] = useState("");
    const [no_of_days, setNoOfDays] = useState("");
    const [location, setLocation] = useState("");
    const [vehicle_pic, setVehiclePic]=useState("");
    const PF = "http://localhost:5000/images/"

    const bookingData = {
        name,
        address,
        contact_number,
        type_of_service,
        selected_model,
        no_of_days,
        location,
        image
    }

    const updateShow = () =>{
        axios.get("http://localhost:5000/api/bookings/getone/"+booking_id)
        .then(function(response){
            setName(response.data['name']);
            setAddress(response.data['address']);
            setContactNumber(response.data['contact_number']);
            setTypeOfService(response.data['type_of_service']);
            setSelectedModel(response.data['selected_model']);
            setNoOfDays(response.data['no_of_days']);
            setLocation(response.data['location']);
            setVehiclePic(response.data['vehicle_pic'])
            setShow(true);
        })
    }

    function submitForm(e:any){
        e.preventDefault();
        console.log(bookingData);
        axios.put("http://localhost:5000/api/bookings/update/"+booking_id,bookingData)
        .then(function(response) {
            console.log(response);
            getData()
            setName('');
            setAddress('');
            setContactNumber('');
            setTypeOfService('');
            setNoOfDays('');
            setLocation('');
            swal({ text: "Successfully Updated", icon: "success"});
            setShow(false);
        })
        .catch(function(error) {
            console.log(error);
            alert("Not added");
        });

    }

    return (
        <>
            <button type="button" className="btn btn-primary btn-floating booking-btn2" onClick={updateShow}>
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
                                        <img src={PF+vehicle_pic} className='img-fluid rounded' alt='' style={{ width: '300px', height: 'auto', float: 'left', marginBottom: '10px' }} />
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
                                    <Form.Control type="text" placeholder="Enter Your Name "  value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3" >
                                    Your Address
                                </Form.Label>
                                <Col sm="7" >
                                    <Form.Control type="text" placeholder="Enter Your Address"  value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3">
                                    Your Contact Number
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="Enter Your Contact Number" value={contact_number} onChange={(e)=>{setContactNumber(e.target.value)}}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3"  >
                                    Type of Service
                                </Form.Label>
                                <Col sm="3">
                                    <Form.Control type="text" placeholder="Type of Service" value={type_of_service}/>
                                </Col>
                                <Col sm={3}>
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setTypeOfService(e.target.value)}>
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
                                    <Form.Control type="text" placeholder="Enter Selected Model" value={selected_model} disabled/>
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">
                                    No of days
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="Enter No of Days" value={no_of_days} onChange={(e)=>{setNoOfDays(e.target.value)}}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">
                                    Location
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
                                </Col>
                            </Form.Group>


                        </Col>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
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