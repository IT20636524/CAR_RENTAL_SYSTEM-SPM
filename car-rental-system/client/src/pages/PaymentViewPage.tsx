import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PaymentInvoice from '../components/Payment/PaymentInvoice'

export default function PaymentView() {

    return (
        <div>
            <Header />
            <div
                className="hpimage"
                style={{
                }}
            >

                <br /><br />
                <PaymentInvoice />
                <br /><br />



            </div>
            <Footer />


        </div>

    )
}