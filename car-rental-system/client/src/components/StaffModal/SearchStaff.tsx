import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import UpdateStaff from './UpdateStaff';
import DeleteStaff from './DeleteStaff';



export default function SearchStaff() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [driver_code , setDriverCode] = useState("");
    


  return (
    <>
     <Button className="stfbtn" variant="info" onClick={handleShow} style={{"marginLeft":"30px","marginTop":"40px","color":"white",width:"350px",height:"45px"}}>
            Search Staff
        </Button>

        

        <Modal show={show}        
           md={1}
            centered
        >
            <Modal.Header>
            <div className="col-md-12 text-center">
            <Modal.Title id="contained-modal-title-vcenter">Search Staff Id</Modal.Title>
            </div>
            </Modal.Header>
            <Modal.Body>

       

    <fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={20}>
    <div className="col-md-12 text-center">
    <Form.Label>
    Staff Member ID:
    </Form.Label>
    </div>
    </Col>
    <Col  sm={8} style={{marginLeft:"80px"}}>
    <Form.Control  type="text" onChange={(e)=>{setDriverCode(e.target.value)}}></Form.Control> 
    </Col>
    </Form.Group>
    </fieldset>
 

    </Modal.Body>
        <Modal.Footer>
        <UpdateStaff driver_code={driver_code}/>
        <DeleteStaff driver_code={driver_code}/>
        <Button className='stfbtn' variant='danger ' onClick={handleClose}  style={{"marginLeft":"750px","color":"#FFFF00"}} >
                        Exit
                    </Button>

        </Modal.Footer>
    </Modal>
    
    </>
  )
}