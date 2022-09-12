import axios from 'axios'
import React, { useState } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import '../components/styles.css'

export default function BookingSidebar() {

    const [passengers, setPassengers] = useState("");
    const [transmission, setTransmission] = useState("");
    const [airCondition, setAirCondition] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [engineCap, setEngineCap] = useState("");
    const [costPerDay, setCostPerDay] = useState("");
    const [model, setModel] = useState("");
    const [image, setImage] = useState("");
    const PF = "http://localhost:5000/image/"


    axios.get("http://localhost:5000/api/cars/CI001").then(function (response) {
        console.log(response);
        setPassengers(response.data['passengers']);
        setTransmission(response.data['transmission']);
        setAirCondition(response.data['airCondition']);
        setFuelType(response.data['fuelType']);
        setEngineCap(response.data['engineCap']);
        setCostPerDay(response.data['costPerDay']);
        setModel(response.data['model']);
        setImage(response.data['image']);
    })

    return (
        <div className="bSidebar">
            <div className="bSidebarItem">
                <Form>
                    <img
                        src={PF+image}
                        alt=""
                    />
                    <span className="bSidebarTitle"><h3>SPECIFICATIONS</h3></span>
                    <br /><br />
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Passengers
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Passengers "  value={passengers}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Transmission
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Transmission "  value={transmission}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Air Condition
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Air Condition "  value={airCondition}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Fuel Type
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Fuel Type " value={fuelType} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Engine Capacity
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" placeholder="Engine Capacity "  value={engineCap}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
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
