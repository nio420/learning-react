import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/React-Router-dom/Home';
import About from './components/React-Router-dom/About';
import Service from './components/React-Router-dom/Service';
import Navbar from './components/React-Router-dom/Navbar';
import Error from './components/React-Router-dom/Error';
import Posts from './components/React-Router-dom/Posts'
import Dashboard from './components/React-Router-dom/Dashboard';
import QuoteSwr from './components/Fetch/QuoteSwr';
import { Suspense } from "react";

function AppPo() {  
    const isLoggedIn = false;
  return (

 <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service number={5} />} />
        <Route path="/posts/:catagory" element={<Posts />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Navigate to='/login'/> } />  
         {/* Catch-all route for 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
            <Suspense fallback={<h1>Loading data...</h1>}>
        <QuoteSwr />
      </Suspense>>
    </Router>
  )
}

export default AppPo;
