import React from 'react'
import AcceptedBookings from '../components/AcceptedBookings'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import GenerateReportBooking from '../components/GenerateReportBooking'
import SearchBooking from '../components/SearchBooking'
import BookingManagement from '../components/BookingManagement'

export default function AdminBookingPage() {
  return (
    <>
        <AdminSideNav/>
        <div className="content">
            <AdminHeader/>
            <br/>
            <GenerateReportBooking/>
            <SearchBooking/>
            <br/>
            <BookingManagement/>
            <br/>

            <br/>
            <AcceptedBookings/>
            <AdminFooter/>
        </div>
        
    </>
  )
}
