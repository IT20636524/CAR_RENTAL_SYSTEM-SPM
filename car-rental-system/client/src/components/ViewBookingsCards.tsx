import axios from 'axios';
import { builtinModules } from 'module'
import React, { useEffect, useState } from 'react'
import DeleteBookingModal from './BookingModal/DeleteBookingModal'
import UpdateBookingModal from './BookingModal/UpdateBookingModal'
import { Link } from 'react-router-dom';

interface bookings{
    booking_id:string,
    name:string,
    address:string,
    contact_number:string,
    type_of_service:string,
    selected_model:string,
    no_of_days:string,
    location:string,
    vehicle_pic:string
}

export default function ViewBookingsCards() {
    const [bookings, setBookings] = useState<bookings[]>([]);
    const [name,setName]=useState("");

    //access web token
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
    };

    useEffect(() => {
        getData()
    },[]);

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('user')||"{}");
        // const user=localStorage.getItem('user');
        setName(user?.name);
    },[])


    const PF = "http://localhost:5000/images/"

    const getData =()=>{

        axios.get("http://localhost:5000/api/bookings/Prathibha",config).then(res => {
            console.log(res.data);
            setBookings(res.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {bookings.map(bm => (
                    <div className="col" key={bm.booking_id}>
                        <div className="card h-100">
                            <div className="card-imag h-50">
                                <img src={PF+bm.vehicle_pic} className="card-img-top" alt="Hollywood Sign on The Hill" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Car Model</h5>
                                <p>Booking Id : {bm.booking_id }</p>
                                <p>Location : {bm.location}</p>
                            </div>
                            <div className="card-footer">
                              
                                <Link to = {`/add-payment/${bm.booking_id}`}>  <button type="button" className="btn btn-success btn-rounded booking-btn">Pay</button></Link>
                                <UpdateBookingModal booking_id={bm.booking_id} getData={getData}/>
                                <DeleteBookingModal booking_id={bm.booking_id} getData={getData}/>
                            </div>
                        </div>
                    </div>
                ))}
                
                
            </div>
        </>
    )
}
