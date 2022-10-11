import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  useEffect, useState } from 'react';
import AddTourPackages from "./components/AddTourPackages";
import Display from "./components/Display";
import AddHotelPackages from "./components/AddHotelPackages";
import ViewHotelDetails from "./components/ViewHotelDetails";
import UpdateHotelDetails from "./components/UpdateHotelDetails";
import AddReservation from "./components/AddReservation";
import UpdateReservation from "./components/UpdateReservation";
import ViewReservationDetails from "./components/ViewReservationDetails";
import ReservationDailySummary from "./components/ReservationDailySummary";
import CusViewHotelDetails from "./components/CusViewHotelDetails";
import ReservationHomePage from "./components/ReservationHomePage";
import HotelPackageDetails from "./components/HotelPackageDetails";
import DailySummaryReport from "./components/DailySummaryReport";
import CusViewReservations from "./components/CusViewReservations";


function App() {
  return (

    <div>
        <Router>
          <Routes>

          <Route  exact path="/" element={<ReservationHomePage />} />
          <Route  path="/AddTourPackages" element={<AddTourPackages />} />
          <Route  path="/Display" element={<Display />} />
          <Route  path="/AddHotelPackages" element={<AddHotelPackages />} />
          <Route  path="/ViewHotelDetails" element={<ViewHotelDetails />} />
          <Route  path="/UpdateHotelDetails/:id" element={<UpdateHotelDetails/>}/>
          <Route  path="/AddReservation" element={<AddReservation />} />
          <Route  path="/UpdateReservation/:id" element={<UpdateReservation />} />
          <Route  path="/ViewReservationDetails" element={<ViewReservationDetails />} />
          <Route  path="/ReservationDailySummary" element={<ReservationDailySummary />} />
          <Route  path="/CusViewHotelDetails" element={<CusViewHotelDetails />} />
          <Route  path="/HotelPackageDetails/:id" element={<HotelPackageDetails />}/>
          <Route  path="/DailySummaryReport" element={<DailySummaryReport />}/>
          <Route  path="/CusViewReservations" element={<CusViewReservations />}/>
          
          </Routes>
          </Router>
          </div>

  );
}

export default App;
