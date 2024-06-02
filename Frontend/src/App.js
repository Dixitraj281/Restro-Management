import React from 'react';
import './Adminmainsidebar.css';
import Home from './UserBody/Home.jsx'
import Header from './Nav/Header.jsx'
import Footer from './Footer/Footer.jsx'
import SearchPage from './UserBody/Explore-Nearby/SearchPage.jsx'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Descriptionindex from './UserBody/Card-Description/Descriptionindex.jsx';
import LoginReg from './UserBody/Login/LoginReg.jsx';
import Adminmain from './Adminportal/Adminmain.jsx';
// import Adminmain from './Adminportal/Adminmain.jsx';


function MainComponent() {
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
  else {
    return (
      <div>
        <Header />
        <Routes>
          {/* User part */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="info/*" element={<Descriptionindex />} />
          <Route path="/admin" element={<Adminmain/>}/>
        </Routes>
        <Footer />
      </div>
    );
  }
}

function App() {
  return (
    <Router>
      <MainComponent />
    </Router>
  );
}


export default App;
