import React, { useEffect,useState } from 'react';
import './App.css';
import Home from './UserBody/Home.jsx'
import Header from './Nav/Header.jsx'
import Footer from './Footer/Footer.jsx'
import SearchPage from './UserBody/Explore-Nearby/SearchPage.jsx'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Descriptionindex from './UserBody/Card-Description/Descriptionindex.jsx';
import LoginReg from './UserBody/Login/LoginReg.jsx';
import Preloader from './Preloaders/Preloader.jsx';
import Admin from './Adminportal/Admins/Admin.jsx';
import Profile from './UserBody/Profile/Profile.jsx'
import Sidebar from './Adminportal/Admins/Sidebar/Sidebar.jsx';

function MainComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Using useLocation within the MainComponent
  const location = useLocation();
  console.log(location.pathname);

  // Conditional rendering based on location.pathname
  if (location.pathname === '/login') {
    return (
      <Routes>
        <Route path='/login' element={<LoginReg />} />
      </Routes>
    );}
    else if (location.pathname === '/admin' || location.pathname === '/admin/profile') {
      return (
        <>
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <Routes>
          <Route path="/admin" element={<Admin/>}/>
          <Route path='/admin/profile' element={<Profile/>} />
        </Routes>
        </>
      );}
  else {
    return (
      <div>
        <Header />
        <Routes>
          {/* User part */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/info/*" element={<Descriptionindex />} />
          {/* <Route path='/profile' element={<Profile/>} /> */}
        </Routes>
        <Footer />
      </div>
    );
  }
}

function App() {
  const [loading, setLoading]  = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);

    },2000);

  },[]);

  return (
    loading?<Preloader/>:
    <Router>
      <MainComponent />
    </Router>
  );
}


export default App;
