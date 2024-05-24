import React, { useEffect,useState } from 'react';
import './App.css';
import Home from './Body/Home.jsx'
import Header from './Nav/Header.jsx'
import Footer from './Footer/Footer.jsx'
import SearchPage from './Body/Explore-Nearby/SearchPage.jsx'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Descriptionindex from './Body/Card-Description/Descriptionindex.jsx';
import LoginReg from './Body/Login/LoginReg.jsx';
import Preloader from './Preloaders/Preloader.jsx';

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
    );
  } else {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="info/*" element={<Descriptionindex />} />
          <Route path="/login" element={<LoginReg />} />
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

    },3000);

  },[]);

  return (
    loading?<Preloader/>:
    <Router>
      <MainComponent />
    </Router>
  );
}


export default App;
