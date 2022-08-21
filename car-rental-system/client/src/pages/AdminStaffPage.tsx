import React  from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import DriversManagemant from './DriversManagemant'



export default function AdminStaffPage() {

    return (
        <>
       
       <AdminSideNav/>
          
          <div className="content">
          <AdminHeader/> 
          
            
          <DriversManagemant/>
          <AdminFooter/>
          
          </div>

 
    </>
       
          
    )
}