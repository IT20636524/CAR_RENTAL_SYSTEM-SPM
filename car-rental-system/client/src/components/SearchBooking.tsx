import React, { useState } from 'react'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { Button, Modal } from 'react-bootstrap';
import './styles.css'

const SearchBooking = (props: any) => {

    const [show, setShow] = useState(false);
    const [studentId, setStudentId] = useState(false);
    const handleClose = () => setShow(false);

    function searchId(e:any) {
        if (e.keyCode == 13) {
            setShow(true);
        }
    }
    return (

        <div>
            <div className="row search">
                <div className="col-sm-10"></div>
                <div className="col-sm-5"></div>
                <MDBCol md="4">
                    <input className="form-control form-control-sm ml-3 w-75 float-right" type="text" placeholder="Search Booking" aria-label="Search"  onKeyDown={(e) => searchId(e)} />
                </MDBCol>
            </div>
            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default SearchBooking;


