import React from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import SearchBooking from '../components/SearchBooking'
import BookingManagement from './BookingManagement'

export default function AdminBookingPage() {
  return (
    <>
        <AdminSideNav/>
        <div className="content">
            <AdminHeader/>
            <br/>
            <SearchBooking/>
            <br/>
            <BookingManagement/>
            <AdminFooter/>
        </div>
        
    </>
  )
}
