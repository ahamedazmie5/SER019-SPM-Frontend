import React, { Fragment, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import img from "../../assets/login.jpg" 

const Login = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}


	const onSubmit = async (e) => {

		e.preventDefault();
		console.log("data",formData)
		let data = await axios.post("http://localhost:8080/travelgo/user/signin",formData);
		console.log("data", data?.data);

		if (data?.data?.userRole) {
			localStorage.setItem("token", data?.data?.token);
			localStorage.setItem("userRole", data?.data?.userRole);
			localStorage.setItem("user", data?.data?.user);
            console.log("user");
			navigate("/ViewHotelDetails");

			if(data?.data?.userRole) {
					localStorage.setItem("token", data?.data?.token);
					localStorage.setItem("userRole", data?.data?.userRole);
					localStorage.setItem("admin", data?.data?.admin);

					navigate("/AdminHome");
				}
		}
		
		else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Login Failed!',
			})
		}
	}


	return (
        <div style={{ marginTop: "30px" }}>
        <br />
            
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">

          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img src={img} style={{width:"80%" , height:"80%"}}/>
                </div>
              </div>
            </div>

           
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
			
			<h1 className="heading">Log In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Log Into Your Account
			</p>
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<input type="submit" className="btn btn-warning" value="Login" />
			</form>
			<p className="link">
				Don't have an account? <Link to="/register">Sign Up</Link>
			</p>
			
		</div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
       
	);
};


export default Login;
