import React, { useState } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import swal from 'sweetalert';

export default function UpdateCar(props: { car_Id: string; }) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);
    const [car, setCar] = useState([]);

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
    const PF = "http://localhost:5000/images/";
    const [file, setFile] = useState<any>();

    const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        // handle the input...
        setFile(e.target.files[0]);
    }

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
        image
    }

    if (file) {
        const data = new FormData();
        const filename = Date.now() + file['name'];
        data.append("name", filename as unknown as Blob);
        data.append("file", file);
        carData.image = filename;
        try {
            axios.put("http://localhost:5000/api/cars/update/", data);
        } catch (err) {
            alert(err)
        }
    }

    const updateShow = () => {
        console.log(props.car_Id)

        axios.get("http://localhost:5000/api/cars/" + props.car_Id).then(function (response) {
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

            setShow(true)

        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });

    };

    function submitForm(e: { preventDefault: () => void; }) {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/cars/update/${props.car_Id}`, carData).then(function (response) {
            console.log(response);
            setCar_Id('');
            setCategory('');
            setModel('');
            setPassengers('');
            setTransmission('');
            setAirCondition('');
            setFuelType('');
            setEngineCap('');
            setCostPerDay('');
            setImage('');

            setShow(false);
            swal({
                text: "Car Successfully Updated", icon: "success", buttons: {
                    cancel: { text: 'Cancel' },
                    confirm: { text: 'OK' },
                }
            }).then((value) => {
                window.location.replace("/admincarpage");
            });

        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <Button variant='success' className='btn-success me-1' onClick={updateShow} style={{ width: "100px" }}>
                Edit
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">Update Car</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={submitForm} >
                        <div className='row justify-content-center'>
                            <Col sm={3}>
                                {/* <fieldset> */}
                                    {/* <Form.Group >
                                        <h5  >Car Image</h5>
                                        {file && (
                                            <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" />

                                        )}
                                        <img src={PF + image} className='img-fluid rounded' alt='' style={{ width: '300px', height: 'auto', float: 'left', marginBottom: '10px' }} />
                                    </Form.Group>
                                </fieldset> */}
                            </Col>
                        </div>

                        <Col sm={10}>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3">
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="file" id="fileInput" onChange={handleUpdate} required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3">
                                    Category
                                </Form.Label>
                                <Col sm="7">
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setCategory(e.target.value)}>
                                        <option selected>{category}</option>
                                        <option value="Luxury">Luxury</option>
                                        <option value="Premium">Premium</option>
                                        <option value="General">General</option>
                                    </select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3" >
                                    Model
                                </Form.Label>
                                <Col sm="5" >
                                    <Form.Control type="text" placeholder="Toyota Premio" value={model} onChange={(e) => setModel(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">
                                    Passengers
                                </Form.Label>
                                <Col sm="7">
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setPassengers(e.target.value)}>
                                        <option selected>{passengers}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3"  >
                                    Transmission
                                </Form.Label>
                                <Col sm={3}>
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setTransmission(e.target.value)}>
                                        <option selected>{transmission}</option>
                                        <option value="Manual">Manual</option>
                                        <option value="Auto">Auto</option>
                                    </select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="3">
                                    Air Condition
                                </Form.Label>
                                <Col sm="7">
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setAirCondition(e.target.value)}>
                                        <option selected>{airCondition}</option>
                                        <option value="A/C">A/C</option>
                                        <option value="Non A/C">Non A/C</option>
                                    </select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">
                                    Fuel Type
                                </Form.Label>
                                <Col sm="7">
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setFuelType(e.target.value)}>
                                        <option selected>{fuelType}</option>
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                    </select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">
                                    Engine Capacity
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="1500 CC" value={engineCap} onChange={(e) => setEngineCap(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">
                                    Cost Per Day
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="8000 LKR" value={costPerDay} onChange={(e) => setCostPerDay(e.target.value)} />
                                </Col>
                            </Form.Group>

                        </Col>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Update
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
function setFile(arg0: File) {
    throw new Error('Function not implemented.');
}
