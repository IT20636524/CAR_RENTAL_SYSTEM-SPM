import React from 'react'

export default function ViewBookingsCards() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-imag h-50">
                            <img src="data:image/jpeg;base64,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" className="card-img-top" alt="Hollywood Sign on The Hill" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Car Model</h5>
                            <p>Booking Id</p>
                            <p>Location</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-success btn-rounded booking-btn">Pay</button>
                            <button type="button" className="btn btn-primary btn-floating booking-btn2">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
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
                            <button type="button" className="btn btn-primary btn-floating booking-btn2">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
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
                            <button type="button" className="btn btn-primary btn-floating booking-btn2">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
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
                            <button type="button" className="btn btn-primary btn-floating booking-btn2">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
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
