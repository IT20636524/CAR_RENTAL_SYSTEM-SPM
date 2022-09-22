import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from 'react-to-print';



export default function StaffReport() {
  const [staff, setStaff] = useState<any[]>([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const componentRef = useRef(null);


  const [driver_code, setDriverCode] = useState("");
  const [driver_name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [driving_license_no, setDrivingLicenseNo] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState("aa");

  const [file, setFile] = useState<any>();



  const getStaff = () => {
    axios.get(`http://localhost:5000/api/staff`)

      .then(res => {
        console.log(res.data)
        setStaff(res.data);

      })
      .catch(err => {
        console.log(err);
      })
  }





  useEffect(() => {
    axios.get("http://localhost:5000/api/staff/")

      .then(res => {
        setStaff(res.data);

      })
      .catch(err => {
        console.log(err);
      })

  })

  async function handleSubmit(e: { preventDefault: () => void; }) {

    e.preventDefault();
    const staffData = {
      driver_code,
      driver_name,
      address,
      contact_number,
      gender,
      driving_license_no,
      experience,
      image,
    };



  }


  return (
    <>

      <Button className="stfbtn" variant="warning" onClick={handleShow} style={{ "marginLeft": "910px", "marginTop": "40px", "width": "300px", "height": "40px", "color": "white" }} >
        Genarate Report
      </Button>

      <Modal show={show}
        size="xl"
        centered

      >
        <Modal.Header>
          <div className="col-md-12 text-center text-decoration-underline" >
            <Modal.Title id="contained-modal-title-vcenter" className='' style={{ "fontSize": "40px" }}> Staff Details</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>

          <div className="container-fluid pt-4 px-4" ref={componentRef} >

            <div className="bg-secondary text-center rounded p-4" >

              <div className="table-responsive"></div>
              <table className="table text-start align-middle table-bordered table-hover mb-0" >
                <thead >
                  <tr>
                    <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Code</th>
                    <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Driver Name</th>
                    <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Address</th>
                    <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Contact </th>
                    <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Gender</th>
                    <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>License No</th>
                    <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Experience</th>



                  </tr>
                </thead>
                <tbody style={{ color: "white" }}>
                  {staff.map(dm => (
                    <tr key={dm.driver_code}>
                      <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.driver_code}</td>
                      <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.driver_name}</td>
                      <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.address}</td>
                      <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.contact_number}</td>
                      <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.gender}</td>
                      <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.driving_license_no}</td>
                      <td style={{ "fontSize": "20px", "fontFamily": "Arial-Black" }}>{dm.experience}</td>
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
    </>
  );
}