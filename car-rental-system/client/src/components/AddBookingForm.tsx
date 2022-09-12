import React, { useContext, useState } from 'react'
import axios from 'axios'
import '../components/styles.css'
import { Col, Row, Form } from "react-bootstrap";
import Footer from './Footer'
import { Context } from '../context/Context';
import swal from 'sweetalert';


export default function AddBookingForm() {

    const { user } = useContext(Context);
    const [car_Id, setCar_Id] = useState("")
    const [model, setModel] = useState("");
    const [image, setImage] = useState("");
    const PF = "http://localhost:5000/image/"
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contact_number, setContactNumber] = useState("");
    const [type_of_service, setTypeOfService] = useState("");
    const [selected_model, setSelectedModel] = useState("");
    const [no_of_days, setNoOfDays] = useState("");
    const [location, setLocation] = useState("");
    const [vehicle_pic, setVehiclePic]=useState("");

    // get car details
    axios.get("http://localhost:5000/api/cars/CI001").then(function (response) {
        console.log(response);
        setCar_Id(response.data['car_Id']);
        setModel(response.data['model']);
        setImage(response.data['image']);
        setSelectedModel(response.data['model']);
        setVehiclePic(response.data['image']);
    })

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

    // add booking details
    const handleSubmit =(e:any)=>{
        e.preventDefault();
        if(name.length === 0 || address.length === 0 || contact_number.length === 0 || no_of_days.length === 0 || location.length === 0){
            swal(" Fields Cannot empty !","Please enter all data !", "error");
        }else{
            console.log(bookingData);
            axios.post('http://localhost:5000/api/bookings/add',bookingData)
            .then(function(response) {
                console.log(response);
                setName('');
                setAddress('');
                setContactNumber('');
                setTypeOfService('');
                setNoOfDays('');
                setLocation('');
                swal({ text: "Successfully Added", icon: "success"})
            })
            .catch(function(error) {
                console.log(error);
                alert("Not added");
            });
        }
    }

    return (
        <div className='bookingForm'>
            <br /><br />
            <div className="row">
                <h3 className='bfFormTitle'>Reserve Your Car Here</h3>
            </div>
            <br /><br />
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Your Name
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="Your Name " value={name} onChange={(e)=>setName(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Your Address
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="Your Address " value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Your Contact Number
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="Your Contact Number " value={contact_number} onChange={(e)=>setContactNumber(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Type of Service
                    </Form.Label>
                    <Col sm={7}>
                        <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "70%" }} onChange={(e) => setTypeOfService(e.target.value)}>
                            <option selected>Select Type of Service</option>
                            <option value="Self Drive">Self Drive</option>
                            <option value="With Driver">With Driver</option>
                        </select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Selected Model
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="Selected Model " value={model} onChange={(e) => setSelectedModel(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        No of Days
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="No of Days " value={no_of_days} onChange={(e)=>setNoOfDays(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Location
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="Location " value={location} onChange={(e)=>setLocation(e.target.value)}/>
                    </Col>
                </Form.Group>
                <div className="row">
                    <button type="button" className="btn btn-warning col-sm-2 add-book-btn">Back</button>
                    <button type="submit" className="btn btn-success col-sm-2 add-book-btn">Inquiry</button>
                </div>
            </Form>

        </div>


    )
}
