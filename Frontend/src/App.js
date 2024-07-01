import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './UserBody/Home.jsx';
import Header from './Nav/Header.jsx';
import Footer from './Footer/Footer.jsx';
import SearchPage from './UserBody/Explore-Nearby/SearchPage.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Descriptionindex from './UserBody/Card-Description/Descriptionindex.jsx';
import LoginReg from './UserBody/Login/LoginReg.jsx';
import Preloader from './Preloaders/Preloader.jsx';
import Admin from './Adminportal/Admin.jsx';
import Profile from './UserBody/Profile/Profile.jsx';
import Sidebar from './Adminportal/Admins/Sidebar/Sidebar.jsx';
import Order from './Adminportal/Order/Order.jsx';
import SubscriptionForm from './Adminportal/Admins/Subscription/Subscription.jsx';
import Adminlogin from './UserBody/Login/Adminlogin.jsx';

function MainComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  console.log(location.pathname);

  // Conditional rendering based on location.pathname
  if (location.pathname === '/login') {
    return (
      <Routes>
        <Route path='/login' element={<LoginReg />} />
      </Routes>
    );
  } else if (location.pathname === '/adminlogin') {
    return (
      <Routes>
        <Route path='/adminlogin' element={<Adminlogin/>} />
      </Routes>
    );
  } 
  
  else if (location.pathname.startsWith('/admin')) {
    return (
      <>
        
        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />      
          <Routes>
            <Route path="/admin" element={<Admin toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>} />
            <Route path='/admin/profile' element={<Profile toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>} />
            <Route path='/admin/orders' element={<Order toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>}/>
            <Route path='/admin/subscription' element={<SubscriptionForm toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>}/>
          </Routes>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/info/:restaurantName/*" element={<Descriptionindex />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    loading ? <Preloader /> :
      <Router>
        <MainComponent />
      </Router>
  );
}

export default App;
