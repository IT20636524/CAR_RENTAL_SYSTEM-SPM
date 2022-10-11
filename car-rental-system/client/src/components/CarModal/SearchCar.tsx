import React, { useState } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import DeleteCar from './DeleteCar';
import UpdateCar from './UpdateCar';

export default function SearchCar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [car_Id, setCar_Id] = useState("");

    return (
        <div>
            <Button className="bg-dark border-1" variant="warning" onClick={handleShow} style={{ backgroundColor: "#8c9399!important", color: "white", "width": "300px", "height": "50px", "marginLeft": "20px", "fontSize": "20px", "marginTop": "10px" }}>
                Search Car
            </Button>

            <Modal show={show}
                md={1}
                centered
            >
                <Modal.Header>
                    <div className="col-md-12 text-center">
                        <Modal.Title id="contained-modal-title-vcenter">Search Car ID</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>

                    <fieldset>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Col sm={20}>
                                <div className="col-md-12 text-center">
                                    <Form.Label>
                                        Car ID:
                                    </Form.Label>
                                </div>
                            </Col>
                            <Col sm={8} style={{ marginLeft: "80px" }}>
                                <Form.Control type="text" onChange={(e) => { setCar_Id(e.target.value) }}></Form.Control>
                            </Col>
                        </Form.Group>
                    </fieldset>

                </Modal.Body>
                <Modal.Footer>
                    <UpdateCar car_Id={car_Id} />
                    <DeleteCar car_Id={car_Id} />
                    <Button variant='secondary' onClick={handleClose} style={{ "marginLeft": "750px" }} >
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}
