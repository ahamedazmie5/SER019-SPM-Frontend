
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddTourPackages from './components/AddTourPackages';
import Display from './components/Display';
import Allusers from './components/AllUsers';

import Navbar from './components/layout/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import RegisterAdmin from './components/Auth/RegisterAdmin';
import Landing from './components/layout/Landing';
import Footer from './components/Auth/Footer';

import AdminDisplay from './components/AdminDisplay';
import AdminHome from './components/AdminHome';
import CusViewReservations from './components/CusViewReservations';
import ViewTourPackage from './components/ViewTourPackage';
import AddHotelPackages from './components/AddHotelPackages';
import ViewHotelDetails from './components/ViewHotelDetails';
import UpdateHotelDetails from './components/UpdateHotelDetails';
import AddReservation from './components/AddReservation';
import UpdateReservation from './components/UpdateReservation';
import ViewReservationDetails from './components/ViewReservationDetails';
import ReservationDailySummary from './components/ReservationDailySummary';
import CusViewHotelDetails from './components/CusViewHotelDetails';
import ReservationHomePage from './components/ReservationHomePage';
import HotelPackageDetails from './components/HotelPackageDetails';

import UserUpdate from './components/UserUpdate';


import UpdateTourPacakage from './components/UpdateTourPacakage';
import ViewBlogs from './components/viewBlogs';
import WriteBlog from './components/writeBlog';
import ViewOneBlog from './components/viewOneBlog';
import AdminReadBlogs from './components/adminReadBlogs';
import EditBlog from './components/editBogs';
import UserReport from './components/UserReport'
import BlogReport from './components/blogReport';



let isauth = localStorage.getItem('user');

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(localStorage.getItem('userRole'));
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/RegisterAdmin" element={<RegisterAdmin />} />

          <Route path="/AddTourPackages" element={<AddTourPackages />} />
          <Route path="/Display" element={<Display />} />
          <Route path="/AdminDisplay" element={<AdminDisplay />} />
          <Route path="/ViewTourPackage/:id" element={<ViewTourPackage />} />
          <Route path="/AddHotelPackages" element={<AddHotelPackages />} />
          <Route path="/ViewHotelDetails" element={<ViewHotelDetails />} />
          <Route path="/Userreport" element={<UserReport />} />
          <Route
            path="/UpdateHotelDetails/:id"
            element={<UpdateHotelDetails />}
          />
          <Route path="/AddReservation" element={<AddReservation />} />
          <Route
            path="/UpdateReservation/:id"
            element={<UpdateReservation />}
          />
          <Route
            path="/HotelPackageDetails/:id"
            element={<HotelPackageDetails />}
          />
          <Route
            path="/CusViewReservations"
            element={<CusViewReservations />}
          />

          <Route path="/AllUsers" element={<Allusers />} />

          <Route
            path="/ViewReservationDetails"
            element={<ViewReservationDetails />}
          />
          <Route
            path="/ReservationDailySummary"
            element={<ReservationDailySummary />}
          />
          <Route
            path="/CusViewHotelDetails"
            element={<CusViewHotelDetails />}
          />
          <Route
            path="/ReservationHomePage"
            element={<ReservationHomePage />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AddTourPackages" element={<AddTourPackages />} />
   
          <Route path="/Display" element={<Display />} />
          <Route path="/AdminDisplay" element={<AdminDisplay />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/AddHotelPackages" element={<AddHotelPackages />} />
          <Route path="/ViewHotelDetails" element={<ViewHotelDetails />} />
          <Route
            path="/UpdateHotelDetails/:id"
            element={<UpdateHotelDetails />}
          />
          <Route path="/AddReservation" element={<AddReservation />} />
          <Route
            path="/UpdateReservation/:id"
            element={<UpdateReservation />}
          />
          <Route exact path="/viewblogs" element={<ViewBlogs />} />
          <Route path="/insertBlog" element={<WriteBlog />} />
          <Route path="/OneBlog/:id" element={<ViewOneBlog />} />
          <Route path="/adminReadBlog" element={<AdminReadBlogs />} />
          <Route path="/EditBlog/:id" element={<EditBlog />} />
          <Route path="/blogReport" element={<BlogReport />} />

          <Route
            path="/UpdateTourPackages/:id"
            element={<UpdateTourPacakage />}
          />
          <Route
            path="/updateUser/:id"
            element={<UserUpdate />}
          />
        </Routes>
        <br></br>

        <div style={{ marginTop: "0%" }}>

          <Footer />
        </div>
      </Router>
    </div>

    // <Router>
    // {/* <Navbar /> */}
    // <Routes>
    /* <Route exact path="/" element={isauth ? <Display /> : <Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AddTourPackages" element={<AddTourPackages />} />
          <Route path="/AddAdmin" element={<AddAdmin />} />
          <Route path="/Display" element={<Display />} />
          <Route path="/AddHotelPackages" element={<AddHotelPackages />} />
          <Route path="/ViewHotelDetails" element={<ViewHotelDetails />} />
          <Route
            path="/UpdateHotelDetails/:id"
            element={<UpdateHotelDetails />}
          />
          <Route path="/AddReservation" element={<AddReservation />} />
          <Route
            path="/UpdateReservation/:id"
            element={<UpdateReservation />}
          />
          <Route exact path="/viewblogs" element={<ViewBlogs />} />
          <Route path="/insertBlog" element={<WriteBlog />} />
          <Route path="/OneBlog/:id" element={<ViewOneBlog />} /> }
        {/* </Routes>
      </Router> */
    /* </div> */
  );
}

export default App;
