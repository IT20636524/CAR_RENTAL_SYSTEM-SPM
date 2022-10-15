import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import swal from 'sweetalert'

export default function DeleteCar(props: { car_Id: string; }) {

    const handleClose = () => setShow(false);

    const [show, setShow] = useState(false);

    const DeleteShow = () => {
        console.log(props.car_Id)

        axios.get("http://localhost:5000/api/cars/" + props.car_Id).then(function (response) {

            setShow(true)

        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });
    }
    const config: any = {
        carData: {
            car_Id: String
        }
    }

    function submitForm(e: { preventDefault: () => void; }) {
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/cars/delete/${props.car_Id}`, config).then(function (response) {
            setShow(false);
            swal({
                text: "Car Successfully Deleted", icon: "success", buttons: {
                    cancel: { text: 'Cancel' },
                    confirm: { text: 'OK' },
                }
            })
                .then((value) => {
                    window.location.replace("/admincarpage");
                });
        }).catch(function (error) {
            console.log(error);
        });
    };

    return (
        <div>
            <Button className='btn-danger me-1' onClick={DeleteShow} style={{ width: "100px" }}>
                Delete
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Delete Car</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <h5>Are you sure you want to delete this car..?</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        No
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}
