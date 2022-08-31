import React from 'react';
// import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPayment from './pages/AddPaymentPage';
import AdminStaffPage from './pages/AdminStaffPage';
import Dashboard from './pages/Dashboard';

import Homepage from './pages/Home';
import PaymentView from './pages/PaymentViewPage';
import Register from './pages/Register';




function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminstaffpage" element={<AdminStaffPage />} />
           <Route path="/add-payment" element={<AddPayment />} />
          <Route path="/paymentview/:payment_id" element={<PaymentView />} />
          <Route path="/sign-up" element={<Register/>} />
        
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;