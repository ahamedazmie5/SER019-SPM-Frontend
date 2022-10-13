import React, { Fragment } from "react";
import { useNavigate , Link} from "react-router-dom";
import logo from "../../assets/logo.jpeg"


const Navbar = () => {

	const navigate = useNavigate();

	let userRole = localStorage.getItem('userRole');

	const handleSubmit = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userRole");
		localStorage.removeItem("user");
		navigate("/login");
	  }

	

	return (
		<div>
			<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={logo} style={{width:"30%" , height:"30%"}}/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

              {/* <a style={{ display: userRole != "user" || userRole != "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/creategrp">Blogs</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a style={{ display: userRole != "user" || userRole != "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/creategrp">Gallery</a> */}
             
                {/* {User pages} */}
                <a style={{ display: userRole == "user" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/creategrp">Bloges</a>&nbsp;&nbsp;
                <a style={{ display: userRole == "user" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/topicreg" aria-current="page">Hotels</a>&nbsp;&nbsp;
				<a style={{ display: userRole == "user" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/group-chat">Gallery</a>&nbsp;&nbsp;
   

                {/*  admin Pages */}
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/AddAdmin" aria-current="page">Add Admnin</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/AllUsers" aria-current="page">View All Users</a>&nbsp;&nbsp;
                {/* <a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/HandleStaff" aria-current="page">Handle Staff</a>&nbsp;&nbsp; */}
				{/* <a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/markingup" aria-current="page">Create Marking Schemes</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/tmpupload" aria-current="page">Upload Templates</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/alltemps" aria-current="page">All Templates</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/assign-panel" aria-current="page">Assign panel</a>&nbsp;&nbsp;&nbsp;
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/ViewAllRoles" aria-current="page">View Roles</a>&nbsp;&nbsp;
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/markspage" aria-current="page">Student Results</a> */}


             

              </div>
            </div>
          </div>
		
            
		 
          <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{ float: "right", marginRight: "10px" , display:userRole ? "flex":"none"}}>
            {"Logout"}
          </button>
   
        </nav>
			</div>
		</div>
		
	);
};



export default Navbar;
