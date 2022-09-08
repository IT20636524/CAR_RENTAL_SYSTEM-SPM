import React from 'react';
// import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPayment from './pages/AddPaymentPage';
import AdminCarPage from './pages/AdminCarPage';
import AdminStaffPage from './pages/AdminStaffPage';
import Dashboard from './pages/Dashboard';

import Homepage from './pages/Home';
import PaymentView from './pages/PaymentViewPage';




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
          <Route path="/admincarpage" element={<AdminCarPage />} />
          
        
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;