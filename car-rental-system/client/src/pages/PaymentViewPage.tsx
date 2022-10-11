import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import Footer from '../components/Footer'
import Header from '../components/Header'
import BookingCard from '../components/Payment/BookingCard';
import PaymentInvoice from '../components/Payment/PaymentInvoice'

export default function PaymentView() {
    const componentRef = useRef(null);
   

    return (
        <div>
            <Header />
            <div className='background-radial-gradient'>

                <br /><br />
                <div className="container" >
                    <div className="row">

                        <div className="col-7">
                            <div ref={componentRef}>
                                <PaymentInvoice />
                            </div>
                        </div>

                        <br /><br />
                        <div className="col-5">
                            <div className="row"  style={{ marginLeft: "80px" }}>
                           
                                <BookingCard />
                               
                            </div>
                            <div className="card" style={{ width: "500px", marginLeft: "100px" }}>
                                <div className="card-body">
                                    <div className="row">
                                        <h5 style={{color:"red"}}>Please Save a Copy of Your Invoice and Bring When You come...!!!</h5>
                                        <div className="col-xl-5" style={{ marginLeft: "300px" }}>
                                           
                                            <ReactToPrint
                                                trigger={() => <a className="btn btn-light text-capitalize" data-mdb-ripple-color="dark">
                                                    <i className="far fa-file-pdf text-danger"></i> Export <br /> OR <br /> <i
                                                className="fas fa-print text-primary"></i> Print</a>}
                                                content={() => componentRef.current}


                                            />
                                             


                                        </div>
                                        {/* <h5 style={{color:"red"}}>Save a Copy of Your Booking Details for your purpose...!!!</h5>
                                        <div className="col-xl-5" style={{ marginLeft: "300px" }}>
                                           
                                            <ReactToPrint
                                                trigger={() => <a className="btn btn-light text-capitalize" data-mdb-ripple-color="dark">
                                                    <i className="far fa-file-pdf text-danger"></i> Export <br /> OR <br /> <i
                                                className="fas fa-print text-primary"></i> Print</a>}
                                                content={() => componentRef.current}


                                            />
                                             


                                        </div> */}
                                    </div>
                                </div></div><br />
                        </div>
                    </div>

                </div>


            </div>
            <Footer />


        </div>

    )
}