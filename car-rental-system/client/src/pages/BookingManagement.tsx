import axios from 'axios';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

interface bookings {
    booking_id: string,
    name: string,
    email: string,
    address: string,
    contact_number: string,
    type_of_service: string,
    selected_model: string,
    no_of_days: string,
    location: string,
    vehicle_pic: string,
    payment_status: string
}

export default function BookingManagement() {
    const [bookings, setBookings] = useState<bookings[]>([]);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [contact_number,setContactNumber] = useState("");
    const [type_of_service,setTypeOfService] = useState("");
    const [selected_model,setSelectedModel] = useState("");
    const [no_of_days,setNoOfDays] = useState("");
    const [location,setLocation] = useState("");
    const [vehicle_pic,setVehiclePic] = useState("");


    useEffect(() => {
        getData()
    }, []);

    const getData = () => {

        axios.get("http://localhost:5000/api/bookings").then(res => {
            console.log(res.data);
            setBookings(res.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const bookingData = {
        name,
        email,
        address,
        contact_number,
        type_of_service,
        selected_model,
        no_of_days,
        location,
        vehicle_pic
    }

    // accept booking details
    const handleSubmit =(e:any)=>{
        e.preventDefault();
        if(name.length === 0 || address.length === 0 || contact_number.length === 0 || no_of_days.length === 0 || location.length === 0){
            swal(" Fields Cannot empty !","Please enter all data !", "error");
        }else{
            console.log(bookingData);
            axios.post('http://localhost:5000/api/bookings/add',bookingData)
            .then(function(response) {
                console.log(response);
                setName('');
                setAddress('');
                setContactNumber('');
                setTypeOfService('');
                setNoOfDays('');
                setLocation('');
                swal({ text: "Accepted", icon: "success"})
            })
            .catch(function(error) {
                console.log(error);
                alert("Not added");
            });
        }
    }

    return (
        <div>
            <table className="table align-middle mb-0 bg-white admin-booking-table">
                <thead className="table-dark">
                    <tr>
                        <th>Vehicle</th>
                        <th>BookingId</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Type of Servie</th>
                        <th>No of days</th>
                        <th>Location</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                        {bookings.map(bm => (
                            <tr key={bm.booking_id} className='table-secondary'>
                            <td >
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "45px", height: "45px" }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{bm.selected_model}</p>
                                        <p className="text-muted mb-0">{bm.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{bm.booking_id}</td>
                            <td>{bm.name}</td>
                            <td>{bm.address}</td>
                            <td>{bm.contact_number}</td>
                            <td>{bm.type_of_service}</td>
                            <td>{bm.no_of_days}</td>
                            <td>{bm.location}</td>
                            <td align='center'>
                                {bm.payment_status=='paid'?<span className="badge rounded-pill bg-success d-inline">{bm.payment_status}</span> : <span className="badge rounded-pill bg-danger  d-inline">{bm.payment_status}</span>}
                                
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-link btn-rounded btn-sm fw-bold"
                                    data-mdb-ripple-color="dark"
                                    onClick={handleSubmit}
                                >
                                    Accept
                                </button>
                            </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <br />

            {/* Accepted Bookings Table */}
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Vehicle</th>
                        <th>BookingId</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Type of Servie</th>
                        <th>No of days</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Toyota</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>B001</td>
                        <td>John</td>
                        <td>Colombo</td>
                        <td>0112345698</td>
                        <td>With Driver</td>
                        <td>2</td>
                        <td>Kandy</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">WagonR</p>
                                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>B002</td>
                        <td>David</td>
                        <td>Colombo</td>
                        <td>0112354879</td>
                        <td>Self Drive</td>
                        <td>3</td>
                        <td>Anuradhapura</td>

                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Vezel</p>
                                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>B003</td>
                        <td>John</td>
                        <td>Colombo</td>
                        <td>0112345698</td>
                        <td>With Driver</td>
                        <td>2</td>
                        <td>Kandy</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
