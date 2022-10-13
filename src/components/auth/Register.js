import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import { ValidateSignUp } from "./Validation";
import img from "../../assets/user.png" 
const Register = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		userName: "",
		email: "",
		password: "",
		password2: "",
		IDnumber:"",
		contactNumber:"+94",
        userRole:"user"
	});

	const { userName, email, password, password2 , IDnumber , contactNumber } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {

		e.preventDefault();

		let validate = ValidateSignUp(formData);

		if(validate.status == false)
		{
			alert(validate.message);
		}

		else{
				if (password !== password2) {
					alert("Password do not match...", "danger");
				} else {
                    let data = await axios.post("http://localhost:8080/travelgo/user/signup",formData);
					console.log("data",data)
					if(data?.data?.userRole)
					{
					localStorage.setItem("token",data?.data?.token);
					localStorage.setItem("userRole",data?.data?.userRole);
					localStorage.setItem("user",data?.data?.user);
					Swal.fire({
						icon: 'success',
						title: 'Congrats!',
						text: 'Register successfull...!',
					})
					navigate("/ViewHotelDetails");
					}
					else
					{
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Registration Failed..!',
						})
					}
				}
			}
	};


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
			
			<h1 className="heading">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="userName"
						value={userName}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
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
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						minLength="6"
						value={password2}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Mobile no"
						name="contactNumber"
						value={contactNumber}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="ID Number"
						name="IDnumber"
						value={IDnumber}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="link">
				Already have an account? <Link to="/login">Sign In</Link>
				<br></br>
			</p>
			
		        </div>
               </div>
            </div>
        </div>
        </div>
        </div>
	);
};

export default Register;
