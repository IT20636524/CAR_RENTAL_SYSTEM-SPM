import React from 'react'
import UpdateBookingModal from './BookingModal/UpdateBookingModal'

export default function ViewBookingsCards() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-imag h-50">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZZBzLh0tpsFysBbq__xw0sFY7JLyyAN1fQ&usqp=CAU" className="card-img-top" alt="Hollywood Sign on The Hill" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Car Model</h5>
                            <p>Booking Id</p>
                            <p>Location</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-success btn-rounded booking-btn">Pay</button>
                            <UpdateBookingModal/>
                            <button type="button" className="btn btn-danger btn-floating booking-btn3">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-image  h-50">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRRkfQf1rRVlkgyYdQbY5rnGQM-crEQB_mg&usqp=CAU" className="card-img-top" alt="Palm Springs Road" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Car Model</h5>
                            <p>Booking Id</p>
                            <p>Location</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-success btn-rounded booking-btn">Pay</button>
                            <UpdateBookingModal/>
                            <button type="button" className="btn btn-danger btn-floating booking-btn3">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-image h-50">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSL1y7znQ_F5h1dg2ApgLVX9kLIdn6LWfLg&usqp=CAU" className="card-img-top" alt="Los Angeles Skyscrapers" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Car Model</h5>
                            <p>Booking Id</p>
                            <p>Location</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-success btn-rounded booking-btn">Pay</button>
                            <UpdateBookingModal/>
                            <button type="button" className="btn btn-danger btn-floating booking-btn3">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-image h-50">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuUOLArkFFzr4mLo-EmJLHMOcbr4AHVsG4w&usqp=CAU" className="card-img-top" alt="Skyscrapers"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Car Model</h5>
                            <p>Booking Id</p>
                            <p>Location</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-success btn-rounded booking-btn">Pay</button>
                            <UpdateBookingModal/>
                            <button type="button" className="btn btn-danger btn-floating booking-btn3">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
