import axios from 'axios'
import React, { useState } from 'react'
import AddBookingForm from "../components/AddBookingForm";
import BookingSidebar from "../components/BookingSidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AddBooking(){
    
    return(
        <>
            <Header/>
            <div className="addBook">    
                <AddBookingForm/>
                <BookingSidebar/>  
            </div>
            <br/>
            <div>
                <Footer/>
            </div>
        </>
    )
}