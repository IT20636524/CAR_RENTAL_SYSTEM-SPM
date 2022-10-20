import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function CarDetailsPage() {

    let { id } = useParams();
    console.log(id);

    // const [car_Id, setCar_Id] = useState("");
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
    const [file] = useState<any>();

    axios.get("http://localhost:5000/api/cars/" + id).then(function (response) {
        // setCar_Id(response.data['']);
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
        <div className='background-radial-gradient' >
            <Header />
            <Form>

                <div className="row" style={{ "marginLeft": "150px", "marginRight": "10px", "marginTop": "80px" }}>
                    <div className="col-md-7">
                        <Col sm={8}>
                            <fieldset>
                                <Form.Group >
                                    <h3 className='inquiriesHeader'>{model}</h3><br/><br/>
                                    {file && (
                                        <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" />
                                    )}
                                    <img src={PF + image} className='img-fluid rounded' alt='' style={{ width: '500px', height: 'auto', float: 'left', marginBottom: '10px' }} /><br/><br/>
                                    <h5 className='inquiriesHeader'>Availability : {availability=='Not Available'? <span style={{color:'red'}}>{availability}</span>: <span style={{color:'green'}}>{availability}</span>}</h5>
                                </Form.Group>
                            </fieldset>
                        </Col>
                    </div>

                    <div className="col-md-5">
                        <h3 className='inquiriesHeader'>Specifications</h3>
                        <br />
                        <Col sm={10}>

                            <Form.Group as={Row} className="mb-0.5" >
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>Category </h6>
                                </Form.Label>
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>{category}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6" >
                                    <h6 className='inquiriesHeader'>Model </h6>
                                </Form.Label>
                                <Form.Label column sm="6" >
                                    <h6 className='inquiriesHeader'>{model}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>Passengers </h6>
                                </Form.Label>
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>{passengers}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5" >
                                <Form.Label column sm="6"  >
                                    <h6 className='inquiriesHeader'>Transmission </h6>
                                </Form.Label>
                                <Form.Label column sm="6"  >
                                    <h6 className='inquiriesHeader'>{transmission}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5" >
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>Air Condition </h6>
                                </Form.Label>
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>{airCondition}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>Fuel Type </h6>
                                </Form.Label>
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>{fuelType}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>Engine Capacity </h6>
                                </Form.Label>
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>{engineCap}</h6>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0.5">
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>Cost Per Day </h6>
                                </Form.Label>
                                <Form.Label column sm="6">
                                    <h6 className='inquiriesHeader'>{costPerDay}</h6>
                                </Form.Label>
                            </Form.Group>
                            <br />
                            <Link to={`/add-booking/${id}`} className="btn btn-info btn-grad">Inquiry</Link>
                        </Col>
                    </div>
                </div>
            </Form>

            <br /><br /><br /><br />
            <Footer />
        </div>
    )
}
