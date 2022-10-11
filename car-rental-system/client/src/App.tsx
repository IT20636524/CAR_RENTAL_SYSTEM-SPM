import React, { useContext } from 'react';
// import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProfile';
import { Context } from './context/Context';
import AboutUsPage from './pages/AboutUsPage';
import AddBooking from './pages/AddBooking';
import AddPayment from './pages/AddPaymentPage';
import AdminBookingPage from './pages/AdminBookingPage';
import AdminCarPage from './pages/AdminCarPage';
import AdminContactUsPage from './pages/AdminContactUsPage';
import AdminFeedbackPage from './pages/AdminFeedbackPage';
import AdminPaymentView from './pages/AdminPaymentView';
import AdminStaffPage from './pages/AdminStaffPage';
import CarDetailsPage from './pages/CarDetailsPage';
import CardViewPage from './pages/CardViewPage';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard';
import DriverView from './pages/DriverView';
import Homepage from './pages/Home';
import Inquiries from './pages/Inquiries';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PaymentView from './pages/PaymentViewPage';
import Register from './pages/Register';
import Staff from './pages/StaffPage';
import VehicleFleet from './pages/VehicleFleet';
import ViewBookings from './pages/ViewBookings';

// import SignUp from './pages/SignUp';

function App() {
  const {user}=useContext(Context);
  // const user=localStorage.getItem('user');
  return (
    <>
      <BrowserRouter>

        <Routes>         
          <Route path="/logout" element={<Logout/>} />       
          <Route path="/adminstaffpage" element={<AdminStaffPage />} />
          <Route path="/add-payment/:booking_id" element={<AddPayment />} />
          <Route path="/paymentview/:payment_id/:booking_id" element={<PaymentView />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/view-cards/:booking_id" element={<CardViewPage />} />
          <Route path="/login" element={user ? user.email === "admin@gmail.com" ?  <Dashboard/> : <Homepage/> :<Login/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/login" element={user?<Homepage/> : <Login />} /> */}
          <Route path="/add-booking/:id" element={<AddBooking/>}/>
          <Route path="/admin-booking" element={<AdminBookingPage/>} />
          <Route path="/admincarpage" element={<AdminCarPage />} />
          {/* <Route path="/register" element={<SignUp/>} /> */}
          <Route path="/user-profile" element={<UserProfile/>}/>
          <Route path="/vehiclefleet" element={<VehicleFleet/>}/>
          <Route path="/view-bookings" element={<ViewBookings/>}/>
          <Route path="/adminpayment" element={<AdminPaymentView />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/:driver_code" element={<DriverView />} />
          <Route path="/admincontactus" element={<AdminContactUsPage />} />   
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/CarDetailsPage/:id" element={<CarDetailsPage />} />
          <Route path='/inquiries' element={<Inquiries/>}/>
          <Route path='/feedback' element={<AdminFeedbackPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;