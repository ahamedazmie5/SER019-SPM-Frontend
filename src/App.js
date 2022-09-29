import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  useEffect, useState } from 'react';
import AddTourPackages from "./components/AddTourPackages";
import AddAdmin from "./components/auth/AdminRegister";
import Display from "./components/Display";
import Allusers from "./components/AllUsers";

import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";

import AddHotelPackages from "./components/AddHotelPackages";
import ViewHotelDetails from "./components/ViewHotelDetails";
import UpdateHotelDetails from "./components/UpdateHotelDetails";
import AddReservation from "./components/AddReservation";
import UpdateReservation from "./components/UpdateReservation";


function App() {
  let isauth = localStorage.getItem('user');
  return (

    <div>
        <Router>
          <Navbar/>
          <Routes>
          <Route exact path="/" element={isauth ? <ViewHotelDetails/> : <Landing/>} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/AddTourPackages" element={<AddTourPackages />} />
          <Route  path="/AddAdmin" element={<AddAdmin/>} />
          <Route  path="/Display" element={<Display />} />
          <Route  path="/AddHotelPackages" element={<AddHotelPackages />} />
          <Route  path="/ViewHotelDetails" element={<ViewHotelDetails />} />
          <Route  path="/UpdateHotelDetails/:id" element={<UpdateHotelDetails />} />
          <Route  path="/AddReservation" element={<AddReservation />} />
          <Route  path="/UpdateReservation/:id" element={<UpdateReservation />} />
          <Route  path="/AllUsers" element={<Allusers />} />

          </Routes>
          </Router>
          </div>

  );
}

export default App;
