import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import { MDBCol } from 'mdb-react-ui-kit';
import swal from 'sweetalert';


 

 
export default function AddStaff() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
  
  const [driver_code , setDriverCode] = useState("");
  const [driver_name , setName] = useState("");
  const [address , setAddress] = useState("");
  const [contact_number , setContactNumber] = useState("");
  const [gender , setGender] = useState("");
  const [driving_license_no , setDrivingLicenseNo] = useState("");
  const [experience , setExperience] = useState("");
  const [note , setNote] = useState("");
  const [image , setImage] = useState("aa");
 
  const [file, setFile] = useState<any>();


  const handleChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    // handle the input...
    setFile(e.target.files[0]);
}
  
  async function handleSubmit(e: { preventDefault: () => void; }){
    
    e.preventDefault();
   const staffData ={
    driver_code,
    driver_name,
    address ,
    contact_number ,
    gender,
    driving_license_no ,
    experience,
    note,
    image,
    };

    if (file) {
      const data =new FormData();
      const filename = Date.now() + file['name'];
      data.append("name", filename as unknown as Blob);
      data.append("file", file);
      staffData.image=  filename;
      try {
         await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

     // Validation 
   
        if(driver_name.length === 0 || address.length === 0 || contact_number.length === 0 || gender.length === 0 ||driving_license_no.length === 0 || experience.length === 0  || note.length === 0 || image.length === 0 ){
              swal(" Fields Cannot empty !","Please enter all data !", "error");
            }  
          else{
            console.log(staffData);
            axios.post('http://localhost:5000/api/staff', staffData)
            .then(function (response) {
              console.log(response.data);
              setDriverCode('');
              setName('');
              setAddress('');
              setContactNumber('');
              setGender('');
              setDrivingLicenseNo('');
              setExperience('');
              setNote('');
              setImage('');
              swal({ text: "Successfully Added", icon: "success", buttons: {
                cancel: { text: 'Cancel' },
                confirm: { text: 'Confirm' },
              } })
              .then((value) => {
                window.location.href = '/adminstaffpage';
                
            });
            })
            .catch(function (error) {
              console.log(error);
              
            });
            
        
          swal({ text: "Successfully Added", icon: "success", buttons: {
            cancel: { text: 'Cancel' },
            confirm: { text: 'Confirm' },
          }})
          .then((value) => {
            window.location.href = '/adminstaffpage'+ driver_code; 
         });
        }   
   }
  

  return (
    <>
    
      <Button className="stfbtn "  onClick={handleShow} style={{"width":"500px","height":"50px", "marginLeft":"410px", "fontSize":"20px"}}>
      Adding Details
      </Button>

      <Modal show={show}        
        size="lg"
        centered
        
      >
        <Modal.Header>
        <div className="col-md-12 text-center"  >
          <Modal.Title id="contained-modal-title-vcenter">Add Staff Details</Modal.Title>
         </div> 
        </Modal.Header>
     
        <Modal.Body >

        


  <Form onSubmit={handleSubmit}>
  <div className='row justify-content-center' >
  <Col sm={3}>
  <fieldset >

    <Form.Group  className="p-2 bd-highlight d-flex flex-column justify-content-center"  >
      
      <MDBCol  className='mb-4'>
      {file && (
        <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" /> 
      )} 
      </MDBCol>
     
  
      
    </Form.Group>
  </fieldset>
  </Col>
  </div>
  <Col sm={10}>

  <Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
          Select Image
  </Form.Label>
  <Col sm="7">
    <Form.Control type="file" id="fileInput" onChange={handleChange} required/>
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
    <Col sm="7" >
      {/* <Form.Control type="tel"  placeholder="Enter Contact Number" maxlength="10" value={contact_number} onChange={(e)=>setContactNumber(e.target.value)} /> */}
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
    <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"200px"}}  onChange={(e)=>setGender(e.target.value)}>
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
      <textarea style={{width:"360px",height:"60px"}} placeholder="Enter Note" value={note} onChange={(e)=>setNote(e.target.value)}  />
    </Col>
  </Form.Group>

  
  </Col>
</Form>

      </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit} style={{height:"40px", width:"20%"}}>
            Submit
          </Button>
          <Button variant="danger" onClick={handleClose} style={{height:"40px", width:"20%"}}>
            Cancel
          </Button> 
        
        </Modal.Footer>
      </Modal>
    </>
  );
}