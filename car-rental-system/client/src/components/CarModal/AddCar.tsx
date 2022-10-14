import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import { MDBCol } from 'mdb-react-ui-kit';
import swal from 'sweetalert';

export default function AddCar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [car_Id, setCar_Id] = useState("");
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [passengers, setPassengers] = useState("");
  const [transmission, setTransmission] = useState("");
  const [airCondition, setAirCondition] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [engineCap, setEngineCap] = useState("");
  const [costPerDay, setCostPerDay] = useState("");
  const [image, setImage] = useState("aa");

  const [file, setFile] = useState<any>(null);
  const [value] = useState("default");

  //Clear button
  const handleClick = (val: any) => {
    setCategory("");
    setModel("");
    setPassengers("");
    setTransmission("");
    setAirCondition("");
    setFuelType("");
    setEngineCap("");
    setCostPerDay("");
    setImage("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    // handle the input...
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
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
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file['name'];
      data.append("name", filename as unknown as Blob);
      data.append("file", file);
      carData.image = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    e.preventDefault();
    console.log(value);

    // Validation
    if (category.length === 0 || model.length === 0 || passengers.length === 0 || transmission.length === 0 || airCondition.length === 0 || fuelType.length === 0 || engineCap.length === 0 || costPerDay.length === 0 || image.length === 0) {
      swal(" Fields Cannot empty !", "Please enter all data !", "error");
    }
    else {
      console.log(carData);
      axios.post('http://localhost:5000/api/cars', carData).then(function (response) {
        console.log(response.data);
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

        swal({
          text: "Successfully Added", icon: "success", buttons: {
            cancel: { text: 'Cancel' },
            confirm: { text: 'OK' },
          }
        }).then((value) => {
          window.location.href = '/admincarpage';
        });
      }).catch(function (error) {
        console.log(error);
        alert("Not added");
      });
    }

  }

  return (
    <div>
      <Button className="btn-dashb me-5 rounded " variant="warning" onClick={handleShow} style={{ "width": "300px", "height": "50px", "marginLeft": "450px", "fontSize": "20px", "marginTop": "25px" }}>
        Add Car
      </Button>

      <Modal show={show}
        size="lg"
        centered
      >
        <Modal.Header>
          <div className="col-md-12 text-center" >
            <button type="button" className="btn-close d-flex float-end" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close"></button>
            <Modal.Title id="contained-modal-title-vcenter">Add Car</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className='row justify-content-center'>
              <Col sm={3}>
                {/* <fieldset>
                  <Form.Group className="p-2 bd-highlight d-flex flex-column justify-content-center" >
                    <MDBCol className='mb-4'>
                      {file && (
                        <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" />
                      )}
                    </MDBCol>
                  </Form.Group>
                </fieldset> */}
              </Col>
            </div>
            <Col sm={10}>
              {/* <Form.Group as={Row} className="mb-3" >

                <Form.Label column sm="3">
                  Add an Image
                </Form.Label>
                <Col sm="7">
                  <Form.Control type="file" id="fileInput" onChange={handleChange} required />
                </Col>
              </Form.Group> */}

              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="3">
                  Category
                </Form.Label>
                <Col sm="7">
                  <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setCategory(e.target.value)} defaultValue={value}>
                    <option value="default" disabled hidden>Select Category</option>
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
                  <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setPassengers(e.target.value)} defaultValue={value}>
                    <option value="default" disabled hidden>Select Passengers</option>
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
                  <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setTransmission(e.target.value)} defaultValue={value}>
                    <option value="default" disabled hidden>Select Transmission</option>
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
                  <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setAirCondition(e.target.value)} defaultValue={value}>
                    <option value="default" disabled hidden>Select Air Condition</option>
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
                  <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "200px" }} onChange={(e) => setFuelType(e.target.value)} defaultValue={value}>
                    <option value="default" disabled hidden>Select Fuel Type</option>
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
          <Button variant="primary" type="submit" onClick={handleSubmit} style={{ height: "40px", width: "20%" }}>
            Add
          </Button>
          <Button variant="danger" onClick={handleClick} style={{ height: "40px", width: "20%" }}>
            Clear
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
