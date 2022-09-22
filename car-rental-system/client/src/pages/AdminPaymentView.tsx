import React from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import AdminPayments from '../components/Payment/AdminPaymentTable'
import PaymentReport from '../components/Payment/PaymentReport'
import SearchPayment from '../components/Payment/SearchPayment'
import { useState } from 'react';
import "../components/styles.css"

export default function AdminPaymentView() {
    
    return (
        <>


            <AdminSideNav />

            <div className="content">
                <AdminHeader />
                <div className="row gx-0">
                    <div className='col-3 mt-5'>
                        <SearchPayment/>
                    </div>

                    <div className='text-end col-8 mt-5 me-1'>
                        <PaymentReport  />

                    </div>
                </div>



                <AdminPayments />
                <AdminFooter />
            </div>


        </>


    )
}
