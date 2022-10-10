import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ReactToPrint from 'react-to-print';

export default function CarReport() {

    const [car, setCar] = useState<any[]>([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const componentRef = useRef(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/cars/").then(res => {
            setCar(res.data);
        })
            .catch(err => {
                console.log(err);
            })

    })

    return (
        <div>
            <Button className="btn-dashb me-5 rounded " variant="warning" onClick={handleShow} style={{ "width": "300px", "height": "50px", "marginLeft": "900px", "fontSize": "20px", "marginTop": "1px" }}>
                Generate Report
            </Button>

            <Modal show={show}
                size="xl"
                centered

            >
                <Modal.Header>
                    <div className="col-md-12 text-center text-decoration-underline" >
                        <Modal.Title id="contained-modal-title-vcenter" className='' style={{ "fontSize": "40px" }}>Summary</Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body>

                    <div className="container-fluid pt-4 px-4" ref={componentRef} >
                        <div className="bg-secondary text-center rounded p-4" >
                            <div className="table-responsive"></div>
                            <table className="table text-start align-middle table-bordered table-hover mb-0" >
                                <thead >
                                    <tr>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>ID</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Category</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Model</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Passengers</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Transmission</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Air Condition</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Fuel Type</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Engine Capacity</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Cost Per Day</th>
                                    </tr>
                                </thead>
                                <tbody style={{ color: "white" }}>
                                    {car.map(cm => (
                                        <tr key={cm.car_Id}>
                                            <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{cm.car_Id}</td>
                                            <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{cm.category}</td>
                                            <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{cm.model}</td>
                                            <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{cm.passengers}</td>
                                            <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{cm.transmission}</td>
                                            <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{cm.airCondition}</td>
                                            <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{cm.fuelType}</td>
                                            <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{cm.engineCap}</td>
                                            <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{cm.costPerDay}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <ReactToPrint
                        trigger={() => <Button variant="primary" style={{ height: "40px", width: "20%" }}>
                            Print Report
                        </Button>}
                        content={() => componentRef.current}
                    />

                    <Button variant="danger" onClick={handleClose} style={{ height: "40px", width: "20%" }}>
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}
