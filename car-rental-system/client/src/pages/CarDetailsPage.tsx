import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function CarDetailsPage() {

    let { id } = useParams();
    console.log(id);

    const [car_Id, setCar_Id] = useState("");
    const [category, setCategory] = useState("");
    const [model, setModel] = useState("");
    const [passengers, setPassengers] = useState("");
    const [transmission, setTransmission] = useState("");
    const [airCondition, setAirCondition] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [engineCap, setEngineCap] = useState("");
    const [costPerDay, setCostPerDay] = useState("");
    const [image, setImage] = useState("");
    const [availability, setAvailability] = useState("");
    const PF = "http://localhost:5000/images/";
    const [file, setFile] = useState<any>();

    const carData = {
        car_Id,
        category,
        model,
        passengers,
        transmission,
        airCondition,
        fuelType,
        engineCap,
        costPerDay,
        image,
        availability
    }

    axios.get("http://localhost:5000/api/cars/" + id).then(function (response) {
        setCar_Id(response.data['']);
        setCategory(response.data['category']);
        setModel(response.data['model']);
        setPassengers(response.data['passengers']);
        setTransmission(response.data['transmission']);
        setAirCondition(response.data['airCondition']);
        setFuelType(response.data['fuelType']);
        setEngineCap(response.data['engineCap']);
        setCostPerDay(response.data['costPerDay']);
        setImage(response.data['image']);
        setAvailability(response.data['availability']);

    }).catch(function (error) {
        console.log(error);
        alert('invalid')
    });

    return (
        <div>
            <Header />
            <Form>

                <div className="row" style={{ "marginLeft": "150px", "marginRight": "10px", "marginTop": "80px" }}>
                    <div className="col-md-7">
                        <Col sm={8}>
                            <fieldset>
                                <Form.Group >
                                    <h3>{model}</h3>
                                    {file && (
                                        <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" />
                                    )}
                                    <img src={PF + image} className='img-fluid rounded' alt='' style={{ width: '500px', height: 'auto', float: 'left', marginBottom: '10px' }} />
                                    <h5>Availability : {availability}</h5>
                                </Form.Group>
                            </fieldset>
                        </Col>
                    </div>

                    <div className="col-md-5">
                        <h5>Specifications</h5>
                        <br />
                        <Col sm={10}>

                            <Form.Group as={Row} className="mb-0.5" >
                                <Form.Label column sm="6">
                                    <h6>Category : {category}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6" >
                                    <h6>Model : {model}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6">
                                    <h6>Passengers : {passengers}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5" >
                                <Form.Label column sm="6"  >
                                    <h6>Transmission : {transmission}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5" >
                                <Form.Label column sm="6">
                                    <h6>Air Condition : {airCondition}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6">
                                    <h6>Fuel Type : {fuelType}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6">
                                    <h6>Engine Capacity : {engineCap}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6">
                                    <h6>Cost Per Day : {costPerDay}</h6>
                                </Form.Label>
                            </Form.Group>
                            <br />
                            <Link to={`/add-booking/${id}`} className="btn btn-info">Inquiry</Link>

                        </Col>
                    </div>
                </div>
            </Form>

            <br /><br /><br /><br />
            <Footer />
        </div>
    )
}
