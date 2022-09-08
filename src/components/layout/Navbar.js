import React, { Fragment } from "react";
import { useNavigate , Link} from "react-router-dom";


const Navbar = () => {

	const navigate = useNavigate();

	let userRole = localStorage.getItem('userRole');

	const handleSubmit = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userRole");
		localStorage.removeItem("user");
		navigate("/");
	  }

	

	return (
		<div>
			<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

			    
                {/* Student pages */}
                <a style={{ display: userRole == "user" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/creategrp">Create Group</a>
                <a style={{ display: userRole == "user" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/topicreg" aria-current="page">Register Reserch Topic</a>
				<a style={{ display: userRole == "user" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/group-chat">Group Chat</a>
   

                {/*  admin Pages */}
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/stdgrps" aria-current="page">All Groups</a>
                <a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/adminviewsub" aria-current="page">Ceate Submissions</a>
                <a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/HandleStaff" aria-current="page">Handle Staff</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/markingup" aria-current="page">Create Marking Schemes</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/tmpupload" aria-current="page">Upload Templates</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/alltemps" aria-current="page">All Templates</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/assign-panel" aria-current="page">Assign panel</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/ViewAllRoles" aria-current="page">View Roles</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/markspage" aria-current="page">Student Results</a>


             

              </div>
            </div>
          </div>
		  <Link to="/userprofile">
			<button  className="btn btn-success" type="submit" style={{ float: "right", display: userRole ? "flex" : "none" , textDecoration:"none"}}>
				Profile
			</button>
		  </Link>	
          <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{ float: "right", marginRight: "10px" , display:userRole ? "flex":"none"}}>
            {"Logout"}
          </button>
   
        </nav>
			</div>
		</div>
		
	);
};



export default Navbar;
