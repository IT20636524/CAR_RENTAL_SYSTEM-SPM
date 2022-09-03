import React from "react";
import AddBookingForm from "../components/AddBookingForm";
import BookingSidebar from "../components/BookingSidebar";
import Footer from "../components/Footer";

export default function AddBooking(){
    return(
        <>
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