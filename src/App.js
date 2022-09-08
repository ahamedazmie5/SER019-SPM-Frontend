import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  useEffect, useState } from 'react';
import AddTourPackages from "./components/AddTourPackages";
import Display from "./components/Display";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
function App() {
  let isauth = localStorage.getItem('user');
  return (

    <div>
        <Router>
          <Navbar/>
          <Routes>
          <Route exact path="/" element={isauth ? <Display/> : <Landing/>} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/AddTourPackages" element={<AddTourPackages />} />
          <Route  path="/Display" element={<Display />} />
          </Routes>
          </Router>
          </div>





  );
}//azmie

export default App;
