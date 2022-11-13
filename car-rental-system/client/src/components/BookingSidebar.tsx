import axios from 'axios'
import React, { useState } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import '../components/styles.css'

export default function BookingSidebar() {

    const [passengers, setPassengers] = useState("");
    const [transmission, setTransmission] = useState("");
    const [airCondition, setAirCondition] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [engineCap, setEngineCap] = useState("");
    const [costPerDay, setCostPerDay] = useState("");
    // const [model, setModel] = useState("");
    const [image, setImage] = useState("");
    const PF = "http://localhost:5000/images/"
    const {id}=useParams();


    axios.get("http://localhost:5000/api/cars/"+id).then(function (response) {
        console.log(response);
        setPassengers(response.data['passengers']);
        setTransmission(response.data['transmission']);
        setAirCondition(response.data['airCondition']);
        setFuelType(response.data['fuelType']);
        setEngineCap(response.data['engineCap']);
        setCostPerDay(response.data['costPerDay']);
        // setModel(response.data['model']);
        setImage(response.data['image']);
    })

    return (
        <div className="bSidebar background-radial-gradient">
            <div className="bSidebarItem">
                <Form>
                    <img
                        src={PF+image}
                        alt="image"
                        width={300}
                        className='bSidebarImg'
                    />
                    <br /><br />
                    <span className="bSidebarTitle"><h3>SPECIFICATIONS</h3></span>
                    <br />
                    <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
                        <Form.Label column sm="3" className="bSidebarLables">
                            Passengers
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Passengers "  value={passengers}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3" className="bSidebarLables">
                            Transmission
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Transmission "  value={transmission}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3" className="bSidebarLables">
                            Air Condition
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Air Condition "  value={airCondition}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3" className="bSidebarLables">
                            Fuel Type
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Fuel Type " value={fuelType} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3" className="bSidebarLables">
                            Engine Capacity
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Engine Capacity "  value={engineCap}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3" className="bSidebarLables">
                            Cost Per Day
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Cost Per Day " value={costPerDay}/>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}
