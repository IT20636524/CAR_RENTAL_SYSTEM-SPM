import React, { useEffect, useState , } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { MDBCol } from 'mdb-react-ui-kit';


export default function UpdateStaff(props: { driver_code: string; }) {
   

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
    const [note , setNote] = useState("");
    const [image , setImage] = useState("");
    const PF = "http://localhost:5000/image/";
    const [file, setFile] = useState<any>();

    const handleUpdate =  (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
  
      // handle the input...
      setFile(e.target.files[0]);
  }
    

    const staffData = {
        driver_code,
        driver_name,
        address ,
        contact_number ,
        gender,
        driving_license_no ,
        experience,
        note,
        image,
    }

    if (file) {
        const data =new FormData();
        const filename = Date.now() + file['name'];
        data.append("name", filename as unknown as Blob);
        data.append("file", file);
        staffData.image=  filename;
        try {
            axios.put("http://localhost:5000/api/update", data);
        } catch (err) {
          alert(err)
        }
      }
 



    const updateShow = () => {
        console.log( props.driver_code)
       
        axios.get("http://localhost:5000/api/staff/" + props.driver_code)
        .then(function (response) {
              setDriverCode(response.data['driver_code']);
              setName(response.data['driver_name']);
              setAddress(response.data['address']);
              setContactNumber(response.data['contact_number']);
              setGender(response.data['gender']);
              setDrivingLicenseNo(response.data['driving_license_no']);
              setExperience(response.data['experience']);
              setNote(response.data['note']);
              setImage(response.data['image']);

            
            setShow(true)


        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };
      

    function submitForm(e: { preventDefault: () => void; }){
        e.preventDefault();
        axios.put(`http://localhost:5000/api/staff/update/${props.driver_code}`,staffData)
            .then(function (response) {
                console.log(response);
                setDriverCode('');
                setName('');
                setAddress('');
                setContactNumber('');
                setGender('');
                setDrivingLicenseNo('');
                setExperience('');
                setNote('');
                setImage('');
                setShow(false);
                swal({ text: "Staff Successfully Updates", icon: "success",buttons: {
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
            <Button variant='success' className='stfbtn me-3' onClick={updateShow} style={{width:"100px" }}>
                Edit
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Update Vehicle Details</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    
  <Form onSubmit={submitForm} >
  <div className='row justify-content-center'>
  <Col sm={3}>
  <fieldset>
  <Form.Group >

{file && (
        <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" /> 
        
      )} 

      
   
  <img src={PF+image} className='img-fluid rounded' alt='' style={{width:'300px',height:'auto', float:'left',marginBottom:'10px'}}/>      
  

</Form.Group>
      
    
  </fieldset>
  </Col>
  </div>
  <Col sm={10}>

  <Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">       
  </Form.Label>
  <Col sm="7">
  <Form.Control type="file" id="fileInput"  onChange={handleUpdate} required/>
  </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Name 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Enter Name " value={driver_name} onChange={(e)=>setName(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3" >
    Address
    </Form.Label>
    <Col sm="7" >
      <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Contact Number
    </Form.Label>
    <Col sm="7">
      <input
      placeholder="Enter Contact number"
      value={contact_number}
      maxLength={10} size={30}
      onChange={(e)=>setContactNumber(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3"  >
    Gender 
    </Form.Label>
    <Col sm={3}>
    <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"200px"}} value={gender} onChange={(e)=>setGender(e.target.value)}>
      <option selected>Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Driving License No
    </Form.Label>
    <Col sm="7">
    <input
      placeholder="Enter Driving License No"
      value={driving_license_no}
      maxLength={7} size={30}
      onChange={(e)=>setDrivingLicenseNo(e.target.value)}/>
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3">
    Experience 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="textarea"placeholder="Enter Experience" value={experience} onChange={(e)=>setExperience(e.target.value)}  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3">
    Note 
    </Form.Label>
    <Col sm="7">
      <textarea style={{width:"360px",height:"60px"}} placeholder="Enter Experience" value={note} onChange={(e)=>setNote(e.target.value)}  />
    </Col>
  </Form.Group>

  
  </Col>
</Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Update Driver Details
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

function setFile(arg0: File) {
  throw new Error('Function not implemented.');
}