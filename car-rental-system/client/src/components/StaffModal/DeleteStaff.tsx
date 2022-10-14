import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, {  useState  } from 'react'

import axios from 'axios';
import swal from 'sweetalert'


export default function DeleteStaff(props: { driver_code: string; }) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show, setShow] = useState(false);
    const [staff, setStaff] = useState([]);
  
    const [driver_code , setDriverCode] = useState("");
    const [driver_name , setName] = useState("");
    const [address , setAddress] = useState("");
    const [contact_number , setContactNumber] = useState("");
    const [gender , setGender] = useState("");
    const [driving_license_no , setDrivingLicenseNo] = useState("");
    const [experience , setExperience] = useState("");
    const [image , setImage] = useState("aa");

    const staffData = {
        driver_code,
        driver_name,
        address ,
        contact_number ,
        gender,
        driving_license_no ,
        experience,
        image,
    }
 



    const DeleteShow = () => {
        console.log( props.driver_code)
       
        axios.get("http://localhost:5000/api/staff/" + props.driver_code)
        .then(function (response) {
              setDriverCode('');
              setName('');
              setAddress('');
              setContactNumber('');
              setGender('');
              setDrivingLicenseNo('');
              setExperience('');
              setImage('');
            
            setShow(true)


        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

   const config:any = {
        staffData: {
           driver_code: String
        }
      }

    function submitForm(e: { preventDefault: () => void; }){
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/staff/delete/${props.driver_code}`,config)
            .then(function (response) {
                setShow(false);
                swal({ text: "Staff Successfully Deleted", icon: "success",buttons: {
                    cancel: { text: 'Cancel' },
                    confirm: { text: 'Confirm' },
                  }})
                  .then((value) => {
                    window.location.replace("/adminstaffpage");
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

  

    return (
        <>
            <Button className='stfbtn me-6' variant='danger' onClick={DeleteShow} style={{width:"100px"}}>
                Delete
            </Button>

            <Modal show={show}
                md={2}
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Delete Staff Details</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                  <h5>Are you sure you want to remove Staff Member?</h5>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Delete Driver Details
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}