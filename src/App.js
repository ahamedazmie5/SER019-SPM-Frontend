import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  useEffect, useState } from 'react';
import AddTourPackages from "./components/AddTourPackages";
import Display from "./components/Display";
import AddHotelPackages from "./components/AddHotelPackages";
import ViewHotelDetails from "./components/ViewHotelDetails";
import UpdateHotelDetails from "./components/UpdateHotelDetails";
import AddReservation from "./components/AddReservation";
import UpdateReservation from "./components/UpdateReservation";

function App() {
  return (

    <div>
        <Router>
          <Routes>

          <Route  path="/AddTourPackages" element={<AddTourPackages />} />
          <Route  path="/Display" element={<Display />} />
          <Route  path="/AddHotelPackages" element={<AddHotelPackages />} />
          <Route  path="/ViewHotelDetails" element={<ViewHotelDetails />} />
          <Route  path="/UpdateHotelDetails/:id" element={<UpdateHotelDetails />} />
          <Route  path="/AddReservation" element={<AddReservation />} />
          <Route  path="/UpdateReservation/:id" element={<UpdateReservation />} />

          </Routes>
          </Router>
          </div>

  );
}

export default App;
