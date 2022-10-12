import axios from 'axios';
import { builtinModules } from 'module'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function BookingCard() {
    
    const params = useParams();
    const [posts, setPosts] =useState<any>([]);

    useEffect(()=> {
        axios.get(`http://localhost:5000/api/bookings/getone/${params.booking_id}`)
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    const PF = "http://localhost:5000/images/"


    return (
        <div>

            <div className="card" style={{ background: "#eee", marginTop: "5px", marginLeft: "10px", width: "500px" }}>
                <h4 className='text-center mt-2'>Booking Details</h4>
                <div className="card-body px-4 px-md-5">

                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={PF+posts.vehicle_pic} className="d-block w-100" style={{ height: "200px" }} />
                            </div>
                            {/* <div className="carousel-item">
                                <img src="https://fastly-production.24c.in/cars24/seo/exterior/BMW/3%20Series%20GT/IMG_5044_1222_1582186327.jpg?auto=format" className="d-block w-100" style={{ height: "200px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://static.autox.com/uploads/2016/11/bmw-3-series-gran-turismo-exterior-photo-front-left-view-1.jpg" className="d-block w-100" style={{ height: "200px" }} />
                            </div> */}

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
                            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="car-info-left">
                                    <h6>Name </h6>
                                    <h6>Email </h6>
                                    <h6>Pick up Location</h6>
                                    <h6>Drop Location </h6>
                                    <h6>Contact Number</h6>
                                    <h6>Type of Service  </h6>
                                    <h6>Selected Model</h6>
                                    <h6>Number of Days</h6>
                                    <h6>Cost Per Day </h6>
                                </div>
                               
                            </div>
                            <div className="col-xxl-1 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="car-info-left">
                                    <h6> : </h6>
                                    <h6> : </h6>
                                    <h6> : </h6>
                                    <h6> : </h6>
                                    <h6> : </h6>
                                    <h6> : </h6>
                                    <h6> :</h6>
                                    <h6> : </h6>
                                    <h6> : </h6>
                                </div>
                               
                            </div>
                            
                            
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="car-info-right">
                                <h6>{posts.name}</h6>
                                <h6>{posts.email}</h6>
                                <h6>{posts.address}</h6>
                                <h6>{posts.location}</h6>
                                <h6>{posts.contact_number}</h6>
                                <h6>{posts.type_of_service}</h6>
                                <h6>{posts.selected_model}</h6>
                                <h6>{posts.no_of_days}</h6>
                                <h6>{posts.cost_per_day}</h6>
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
           
               <br /><br />
        </div>
    )
}
