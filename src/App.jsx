import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from '/src/components/Home';
import AboutUs from '/src/components/AboutUs';
import Contact from '/src/components/Contact';
import Villas from '/src/components/Villa/Villas';
import SingleVilla from '/src/components/Villa/SingleVilla';
import TermsAndConditions from '/src/components/TermsAndConditions/TermsAndConditions';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer'
import '/src/App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
          <Route path='/villas' element={<Villas/>}/>
          <Route path='/villa/:id' element={<SingleVilla/>}/>
          </Routes>
          <Footer/>
      </Router>
      
    </>
  )
}

export default App
