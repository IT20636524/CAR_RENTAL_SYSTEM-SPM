import React, { useState } from 'react'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { Button, Modal } from 'react-bootstrap';
import './styles.css'
import SearchBookingModal from './BookingModal/SearchBookingModal';

const SearchBooking = (props: any) => {

    const [show, setShow] = useState(false);
    const [bookingId, setBookingId] = useState("");
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
                <MDBCol md="4">
                    <input className="form-control form-control-sm ml-3 w-75 float-right" type="text" placeholder="Search Booking" aria-label="Search"  onKeyDown={(e) => searchId(e)} onChange={(e)=>{setBookingId(e.target.value)}}/>
                </MDBCol>
            </div>
            <Modal show={show}
                size="lg"
                centered
            >
                <SearchBookingModal bookingId={bookingId}/>
                {/* <SearchBookingModal/> */}
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


