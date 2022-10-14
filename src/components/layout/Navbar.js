import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../assets/logo1.png";

const Navbar = () => {
  const navigate = useNavigate();

  let userRole = localStorage.getItem("userRole");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img src={Login} alt="" width="280" height="50" />
          </a>

          <div className="container-fluid">
            <></>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "customer" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/viewblogs"
                    aria-current="page"
                  >
                    {" "}
                    Bloges
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "customer" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/ReservationHomePage"
                    aria-current="page"
                  >
                    Hotels{" "}
                  </a>
                </li>
               
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "admin" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/RegisterAdmin"
                    aria-current="page"
                  >
                    {" "}
                    Add Admnin{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "admin" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/AllUsers"
                    aria-current="page"
                  >
                    {" "}
                    All User
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "admin" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/ViewHotelDetails"
                    aria-current="page"
                  >
                    {" "}
                    Hotel Reservation
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "admin" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/AdminDisplay"
                    aria-current="page"
                  >
                    {" "}
                    Tour Pacakges
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "admin" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/adminReadBlog"
                    aria-current="page"
                  >
                    {" "}
                    Blogs
                  </a>
                </li>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="btn btn-secondary toggle"
            aria-haspopup="true"
            aria-expanded="false"
            type="submit"
            style={{
              float: "right",
              marginRight: "10px",
              display: userRole ? "flex" : "none",
            }}
          >
            {"Logout"}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
