import React from 'react'
import { Link } from 'react-router-dom';

export default function BookingCard() {
    return (
        <div>

            <div className="card" style={{ background: "#eee", marginTop: "5px", marginLeft: "10px", width: "500px" }}>
                <h4 className='text-center mt-2'>Booking Details</h4>
                <div className="card-body px-4 px-md-5">

                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg" className="d-block w-100" style={{ height: "200px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://fastly-production.24c.in/cars24/seo/exterior/BMW/3%20Series%20GT/IMG_5044_1222_1582186327.jpg?auto=format" className="d-block w-100" style={{ height: "200px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://static.autox.com/uploads/2016/11/bmw-3-series-gran-turismo-exterior-photo-front-left-view-1.jpg" className="d-block w-100" style={{ height: "200px" }} />
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <br />
                    <h4>Technical specifications</h4><br />
                    <div className="car-info">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="car-info-left">
                                    <h6>Brand: <span>Peugeot</span></h6>
                                    <h6>Model: <span>208</span></h6>
                                    <h6>Coupe type: <span>Hatchback</span></h6>
                                    <h6>Fuel type: <span>Gasoline</span></h6>
                                    <h6>Gearbox: <span>Manual</span></h6>
                                    <h6>Doors: <span>5</span></h6>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="car-info-right">
                                    <h6>Seats: <span>5</span></h6>
                                    <h6>Volume of trunk: <span>44 l</span></h6>
                                    <h6>Fuel consumption: <span>4.8 l/100 km</span></h6>
                                    <h6>Trunk volume: <span>265-1106 l</span></h6>
                                    <h6>HP: <span>100</span></h6>
                                    <h6>Engine volume: <span>1200 cm3</span></h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div><br /><br />
        </div>
    )
}
