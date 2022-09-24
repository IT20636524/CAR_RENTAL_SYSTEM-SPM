import React  from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'

import AdminSideNav from '../components/AdminSideNav'
import "../components/styles.css"
import AdminContactUs from './AdminContactUs'
import DriversManagemant from './DriversManagemant'



export default function AdminContactUsPage() {

    return (
        <>
       
          
            <AdminSideNav/>
          
            <div className="content">
            <AdminHeader/> 
            
                  
            <AdminContactUs/>
            <AdminFooter/>
          </div>

 
    </>
       
          
    )
}