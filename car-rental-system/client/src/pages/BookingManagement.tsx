import React from 'react'

export default function BookingManagement() {
    return (
        <>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Vehicle</th>
                        <th>BookingId</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Type of Servie</th>
                        <th>No of days</th>
                        <th>Location</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Toyota</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>B001</td>
                        <td>John</td>
                        <td>Colombo</td>
                        <td>0112345698</td>
                        <td>With Driver</td>
                        <td>2</td>
                        <td>Kandy</td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Paid</span>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-link btn-rounded btn-sm fw-bold"
                                data-mdb-ripple-color="dark"
                            >
                                Accept
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">WagonR</p>
                                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>B002</td>
                        <td>David</td>
                        <td>Colombo</td>
                        <td>0112354879</td>
                        <td>Self Drive</td>
                        <td>3</td>
                        <td>Anuradhapura</td>
                        <td>
                            <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-link btn-rounded btn-sm fw-bold"
                                data-mdb-ripple-color="dark"
                            >
                                Accept
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Vezel</p>
                                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>B003</td>
                        <td>John</td>
                        <td>Colombo</td>
                        <td>0112345698</td>
                        <td>With Driver</td>
                        <td>2</td>
                        <td>Kandy</td>
                        <td>
                            <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-link btn-rounded btn-sm fw-bold"
                                data-mdb-ripple-color="dark"
                            >
                                Accept
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Vehicle</th>
                        <th>BookingId</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Type of Servie</th>
                        <th>No of days</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Toyota</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>B001</td>
                        <td>John</td>
                        <td>Colombo</td>
                        <td>0112345698</td>
                        <td>With Driver</td>
                        <td>2</td> 
                        <td>Kandy</td>   
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">WagonR</p>
                                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>B002</td>
                        <td>David</td>
                        <td>Colombo</td>
                        <td>0112354879</td>
                        <td>Self Drive</td>
                        <td>3</td>
                        <td>Anuradhapura</td> 
                        
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Vezel</p>
                                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>B003</td>
                        <td>John</td>
                        <td>Colombo</td>
                        <td>0112345698</td>
                        <td>With Driver</td>
                        <td>2</td>  
                        <td>Kandy</td>    
                    </tr>
                </tbody>
            </table>
        </>
    )
}
