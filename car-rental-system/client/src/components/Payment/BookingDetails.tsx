import React from 'react'
import { Link } from 'react-router-dom';
import BookingCard from './BookingCard';

export default function BookingDetails() {
    return (
        <div>


            <Link to="/view-cards"><button type="button" className="btn btn-warning" style={{ width: "200px", height: "50px", float: "right" }}>
                see Your Cards
            </button></Link>


            <br /><br /><br />

            <BookingCard />

          
        </div>
    )
}
