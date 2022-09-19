import React from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import AdminPayments from '../components/Payment/AdminPaymentTable'
import "../components/styles.css"



export default function AdminPaymentView() {

    return (
        <>


            <AdminSideNav />

            <div className="content">
                <AdminHeader />
              



                <AdminPayments />
                <AdminFooter />
            </div>


        </>


    )
}
