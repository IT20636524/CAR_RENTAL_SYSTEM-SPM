import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ViewBookingsCards from '../components/ViewBookingsCards'

export default function ViewBookings() {
    return (
        <div className='background-radial-gradient'>
            <Header/>
            <div className="viewBooking ">
                <ViewBookingsCards/>
            </div>
            <Footer/>
        </div>
    )
}
