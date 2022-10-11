import React from 'react'
import { Link } from 'react-router-dom'
import "../components/styles.css"



export default function AdminSideNav() {

    return (
        <>
            <div>

                <div className="container-fluid position-relative d-flex p-0">

                    <div className="sidebar pe-4 pb-3">
                        <nav className="navbar bg-secondary navbar-dark">
                            <a href="index.html" className="navbar-brand mx-4 mb-3">
                                <h3 className="text-primary mt-2"><i className="fa fa-user-edit me-2"></i>GoRent</h3>
                            </a>
                            <div className="d-flex align-items-center ms-4 mb-5">
                                <div className="position-relative">
                                    <img className="rounded-circle" src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=826&t=st=1660086024~exp=1660086624~hmac=a8cfc9db155d1961beb1f3d008fc03a19065de10ab6f73a857dc1590552ce327" alt="" style={{ width: "40px", height: "40px" }} />
                                    <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0">Jhon Doe</h6>
                                    <span>Admin</span>
                                </div>
                            </div>
                            <div className="navbar-nav w-100">
                                <a href="/dashboard" className="nav-item nav-link active mb-3"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>

                                <Link to={"/admincarpage"} className="nav-item nav-link"><i className="fas fa-car me-3"></i>Cars</Link><br />
                                <Link to={"/adminstaffpage"} className="nav-item nav-link"><i className="fas fa-users-cog me-3"></i>Drivers</Link><br />
                                <Link to={"/admin-booking"} className="nav-item nav-link"><i className="fab fa-first-order me-3"></i>Bookings</Link><br />
                                <Link to={"/adminpayment"} className="nav-item nav-link"><i className="far fa-credit-card me-3"></i>Payments</Link><br />
                                <Link to={"/admincontactus"} className="nav-item nav-link"><i className="fas fa-comment-alt me-3"></i>Messages</Link><br />
                                <Link to={"/feedback"} className="nav-item nav-link"><i className="fas fa-user-tag me-3"></i>Feedback</Link><br />
                                <Link to={"/dashboard"} className="nav-item nav-link"><i className="fas fa-cogs me-3"></i>Settings</Link><br />
                                <Link to={"/dashboard"} className="nav-item nav-link"><i className="fa fa-adjust me-3"></i>Mode</Link>


                            </div>
                        </nav>
                    </div>










                </div>




            </div>






        </>


    )
}