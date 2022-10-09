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

const PF = "http://localhost:5000/images/"

export default function AcceptedBookings() {
    const [bookings, setBookings] = useState<bookings[]>([]);
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [address,setAddress] = useState("");
    // const [contact_number,setContactNumber] = useState("");
    // const [type_of_service,setTypeOfService] = useState("");
    // const [selected_model,setSelectedModel] = useState("");
    // const [no_of_days,setNoOfDays] = useState("");
    // const [location,setLocation] = useState("");
    // const [vehicle_pic,setVehiclePic] = useState("");


    useEffect(() => {
        getData()
    }, []);

    const getData = () => {

        axios.get("http://localhost:5000/api/acceptedbookings/").then(res => {
            console.log(res.data);
            setBookings(res.data);
        }).catch(error => {
            console.log(error);
        })
    }
    

    return (
        <div>
            {/* Accepted Bookings Table */}
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
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
