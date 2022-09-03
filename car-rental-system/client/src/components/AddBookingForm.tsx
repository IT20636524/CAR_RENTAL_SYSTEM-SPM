import React from 'react'
import '../components/styles.css'
import Footer from './Footer'

export default function AddBookingForm() {
    return (
        <div className='bookingForm'>
            <br/><br/>
            <div className="row">
                <h3 className='bfFormTitle'>Reserve Your Car Here</h3>
            </div>
            <br /><br />
            <div className="row">
                <p className='col-sm bf-label'>Your Name</p>
                <div className="form-outline col-sm bf-input bf-input">
                    <input type="text" id="form12" className="form-control" />
                    <label className="form-label" htmlFor="form12">Example label</label>
                </div>
            </div>
            <div className="row">
                <p className="col-sm bf-label">Your Address</p>
                <div className="form-outline col-sm bf-input">
                    <input type="text" id="form12" className="form-control" />
                    <label className="form-label" htmlFor="form12">Example label</label>
                </div>
            </div>
            <div className="row">
                <p className="col-sm bf-label">Your Contact Number</p>
                <div className="form-outline col-sm bf-input">
                    <input type="tel" id="typePhone" className="form-control" />
                    <label className="form-label" htmlFor="typePhone">Phone number input</label>
                </div>
            </div>
            <div className="row">
                <p className="col-sm bf-label">Type of service</p>
            </div>
            <div className="row">
                <p className="col-sm bf-label">Selected Model</p>
                <div className="form-outline col-sm mb-3 bf-input" style={{ width: "22rem;" }}>
                    <input
                        className="form-control"
                        id="formCont
                    rolDisabled"
                        type="text"
                        placeholder="Disabled input"
                        aria-label="disabled input example"
                        disabled
                    />
                    <label className="form-label" htmlFor="formControlDisabled">Disabled</label>
                </div>
            </div>
            <div className="row">
                <p className="col-sm bf-label">No of days</p>
                <div className="form-outline col-sm bf-input">
                    <input type="number" id="typeNumber" className="form-control" />
                    <label className="form-label" htmlFor="typeNumber">Number input</label>
                </div>
            </div>
            <div className="row">
                <p className="col-sm bf-label">Location</p>
                <div className="form-outline col-sm bf-input">
                    <input type="text" id="form12" className="form-control" />
                    <label className="form-label" htmlFor="form12">Example label</label>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <button type="button" className="btn btn-warning col-sm-2 add-book-btn">Back</button>
                <button type="button" className="btn btn-success col-sm-2 add-book-btn">Inquiry</button>
            </div>
        </div>
        
        
    )
}
