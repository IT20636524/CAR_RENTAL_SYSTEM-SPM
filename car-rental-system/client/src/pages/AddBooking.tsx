import React from "react";
import AddBookingForm from "../components/AddBookingForm";
import BookingSidebar from "../components/BookingSidebar";

export default function AddBooking(){
    return(
        <>
            <div className="addBook">
                <AddBookingForm/>
                <BookingSidebar/>
            </div>
        </>
    )
}