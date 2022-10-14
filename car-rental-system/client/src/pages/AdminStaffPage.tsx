import React  from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import SearchStaff from '../components/StaffModal/SearchStaff'
import StaffReport from '../components/StaffModal/StaffReport'
import DriversManagemant from './DriversManagemant'



export default function AdminStaffPage() {

    return (
        <>
       
       <AdminSideNav/>
          
          <div className="content">
          <AdminHeader/> 
          
            
            <div className="container">
  <div className="row">
    <div className="col-sm">
    <SearchStaff/>
    </div>
    <div className="col-sm">
    <StaffReport/>
    </div>
  </div>
</div>
          <DriversManagemant/>

          <AdminFooter/>
          
          </div>

 
    </>
       
          
    )
}