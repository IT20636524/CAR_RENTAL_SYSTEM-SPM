import React from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import AdminPayments from '../components/Payment/AdminPaymentTable'
import PaymentReport from '../components/Payment/PaymentReport'

import "../components/styles.css"



export default function AdminPaymentView() {

    return (
        <>


            <AdminSideNav />

            <div className="content">
                <AdminHeader />
                <div className="row">
                    <div className='col-3 mt-5' style={{ marginLeft: "30px" }}>
                        
                    </div>

                    <div className='text-end col-8 mt-5'>
                        <PaymentReport />

                    </div>
                </div>



                <AdminPayments />
                <AdminFooter />
            </div>


        </>


    )
}
