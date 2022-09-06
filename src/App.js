import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  useEffect, useState } from 'react';
import AddTourPackages from "./components/AddTourPackages";
import Display from "./components/Display";
function App() {
  return (

    <div>
        <Router>
          <Routes>

          <Route  path="/AddTourPackages" element={<AddTourPackages />} />
          <Route  path="/Display" element={<Display />} />
          </Routes>
          </Router>
          </div>





  );
}//azmie

export default App;
