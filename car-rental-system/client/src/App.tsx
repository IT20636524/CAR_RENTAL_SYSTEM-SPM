import React from 'react';
// import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminStaffPage from './pages/AdminStaffPage';
import Dashboard from './pages/Dashboard';

import Homepage from './pages/Home';




function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminstaffpage" element={<AdminStaffPage />} />
          
        
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;