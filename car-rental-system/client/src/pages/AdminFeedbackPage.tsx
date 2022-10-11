import React  from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'

import AdminSideNav from '../components/AdminSideNav'
import "../components/styles.css"
import AdminFeedback from './AdminFeedback'



export default function AdminFeedbackPage() {

    return (
        <>
       
          
            <AdminSideNav/>
          
            <div className="content">
            <AdminHeader/> 
            
                  
            <AdminFeedback/>
            <AdminFooter/>
          </div>

 
    </>
       
          
    )
}