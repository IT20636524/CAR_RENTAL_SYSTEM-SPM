import React, { useContext } from 'react';
// import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProfile';
import { Context } from './context/Context';
import AddBooking from './pages/AddBooking';
import AddPayment from './pages/AddPaymentPage';
import AdminBookingPage from './pages/AdminBookingPage';
import AdminCarPage from './pages/AdminCarPage';
import AdminPaymentView from './pages/AdminPaymentView';
import AdminStaffPage from './pages/AdminStaffPage';
import CardViewPage from './pages/CardViewPage';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Home';
import Login from './pages/Login';
import PaymentView from './pages/PaymentViewPage';
import Register from './pages/Register';
import VehicleFleet from './pages/VehicleFleet';
import ViewBookings from './pages/ViewBookings';
// import SignUp from './pages/SignUp';

function App() {
  const {user}=useContext(Context);
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminstaffpage" element={<AdminStaffPage />} />
          <Route path="/add-payment" element={<AddPayment />} />
          <Route path="/paymentview/:payment_id" element={<PaymentView />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/view-cards" element={<CardViewPage />} />
          <Route path="/login" element={user?<Homepage/> : <Login />} />
          <Route path="/add-booking" element={<AddBooking/>}/>
          <Route path="/admin-booking" element={<AdminBookingPage/>} />
          <Route path="/admincarpage" element={<AdminCarPage />} />
          {/* <Route path="/register" element={<SignUp/>} /> */}
          <Route path="/user-profile" element={<UserProfile/>}/>
          <Route path="/vehiclefleet" element={<VehicleFleet/>}/>
          <Route path="/view-bookings" element={<ViewBookings/>}/>
          <Route path="/adminpayment" element={<AdminPaymentView />} />
        

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;