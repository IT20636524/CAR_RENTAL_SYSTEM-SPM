import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import { MDBCol } from 'mdb-react-ui-kit';
import swal from 'sweetalert';


 

 
export default function Feedback() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
  
  const [feedback_code , setFeedbackCode] = useState("");
  const [comment , setComment] = useState("");
 
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
   const feedbackData ={
    feedback_code,
    comment,
    };

    if (file) {
      const data =new FormData();
      const filename = Date.now() + file['name'];
      data.append("name", filename as unknown as Blob);
      data.append("file", file);
      try {
         await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

     // Validation 
   
        if(comment.length === 0  ){
              swal(" Fields Cannot empty !","Please enter all data !", "error");
            }  
          else{
            console.log(feedbackData);
            axios.post('http://localhost:5000/api/feedback', feedbackData)
            .then(function (response) {
              console.log(response.data);
              setFeedbackCode('');
              setComment('');
              swal({ text: "Successfully Added", icon: "success", buttons: {
                cancel: { text: 'Cancel' },
                confirm: { text: 'Confirm' },
              } })
              .then((value) => {
                window.location.href = '/staff';
                
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
            window.location.href = '/staff'+ feedback_code; 
         });
        }   
   }
  

  return (
    <>
    
      <Button className="glow-on-hover "  onClick={handleShow} style={{"width":"200px","height":"50px", "marginLeft":"1200px", "fontSize":"20px",marginTop:"50px"}}>
      FEEDBACK
                
                                <span className='heart'><i className="fas fa-heart  fa-lg" style={{marginLeft:"10px"}}></i></span>
                                
                              
      </Button>

      <Modal show={show}        
        size="lg"
        centered
        
        
      >
        <Modal.Header>
        <div className="col-md-12 text-center "  >
          <Modal.Title id="contained-modal-title-vcenter">WE WOULD LOVE TO HEAR YOUR THOUGHTS</Modal.Title>
         </div> 
        </Modal.Header>
     
        <Modal.Body >

        


  <Form onSubmit={handleSubmit}>
  <Col sm={10}>


  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="4" style={{fontSize:"30px",marginTop:"10px",marginLeft:"30px"}}>
    Comment 
    </Form.Label>
    <Col sm="7">
      <textarea  style={{width:"460px",height:"80px"}} placeholder="Share your thoughts " value={comment} onChange={(e)=>setComment(e.target.value)}/>
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