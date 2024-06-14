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
import Admin from './Adminportal/Admins/Admin.jsx';
import Profile from './UserBody/Profile/Profile.jsx';
import Sidebar from './Adminportal/Admins/Sidebar/Sidebar.jsx';
import AdminHeader from './Adminportal/Admins/AdminHeader/AdminHeader.jsx';

function MainComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  console.log(location.pathname);

  // Conditional rendering based on location.pathname
  if (location.pathname.startsWith === '/login') {
    return (
      <Routes>
        <Route path='/login' element={<LoginReg />} />
      </Routes>
    );
  } else if (location.pathname.startsWith('/admin')) {
    return (
      <>
        
        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />      
          <Routes>
            <Route path="/admin" element={<Admin toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>} />
            <Route path='/admin/profile' element={<Profile toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>} />
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
          <Route path="/info/*" element={<Descriptionindex />} />
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
