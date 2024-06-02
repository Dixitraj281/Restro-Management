import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import Dashboard from './Component/Dashboard';
import Orders from './Pages/Order';
import Restaurants from './Pages/Restaurant';
import Users from './Pages/User';

const Adminmain = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default Adminmain;
