import React from 'react';
// import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DriversManagemant from './pages/DriversManagemant';

import Homepage from './pages/Home';




function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/drivermanagemant" element={<DriversManagemant />} />
          
        
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;