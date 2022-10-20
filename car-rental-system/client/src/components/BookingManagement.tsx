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
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [contact_number, setContactNumber] = useState("");
    // const [type_of_service, setTypeOfService] = useState("");
    // const [selected_model, setSelectedModel] = useState("");
    // const [no_of_days, setNoOfDays] = useState("");
    // const [location, setLocation] = useState("");
    // const [vehicle_pic, setVehiclePic] = useState("");
    const PF = "http://localhost:5000/images/"

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {

        axios.get("http://localhost:5000/api/bookings/all").then(res => {
            console.log(res.data);
            setBookings(res.data);
        }).catch(error => {
            console.log(error);
        })
    }

    // const bookingData = {
    //     name,
    //     email,
    //     address,
    //     contact_number,
    //     type_of_service,
    //     selected_model,
    //     no_of_days,
    //     location,
    //     vehicle_pic
    // }

    // accept booking details
    const handleSubmit = (e: any) => {
        console.log(e)
        const bookingData = {
            name: e.name,
            address: e.address,
            contact_number: e.contact_number,
            type_of_service: e.type_of_service,
            selected_model: e.selected_model,
            no_of_days: e.no_of_days,
            location: e.location,
            vehicle_pic: e.vehicle_pic
        }
        console.log(bookingData);
        axios.post('http://localhost:5000/api/acceptedbookings/add', bookingData)
            .then(function (response) {
                console.log(response);
                console.log("successful")
                swal({ text: "Accepted", icon: "success" })
            })
            .catch(function (error) {
                console.log(error);
                alert("Not added");
            });

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
                        <th>Type of Service</th>
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
                                        src={PF + bm.vehicle_pic}
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
                                {bm.payment_status == 'paid' ? <span className="badge rounded-pill bg-success d-inline">{bm.payment_status}</span> : <span className="badge rounded-pill bg-danger  d-inline">{bm.payment_status}</span>}

                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-info btn-grad2"
                                    data-mdb-ripple-color="dark"
                                    onClick={() => handleSubmit(bm)}
                                >
                                    Accept
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />

        </div>
    )
}
