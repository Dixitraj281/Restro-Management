import React from 'react';
import './App.css';
import Home from './Body/Home.jsx'
import Header from './Nav/Header.jsx'
import Footer from './Footer/Footer.jsx'
import SearchPage from './Body/Explore-Nearby/SearchPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Descriptionindex from './Body/Card-Description/Descriptionindex.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="info/*" element={<Descriptionindex />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
