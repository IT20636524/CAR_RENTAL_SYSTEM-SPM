import React from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import BookingManagement from './BookingManagement'

export default function AdminBookingPage() {
  return (
    <>
        <AdminSideNav/>
        <div className="content">
            <AdminHeader/>
            <br/>
            <BookingManagement/>
            <AdminFooter/>
        </div>
        
    </>
  )
}
