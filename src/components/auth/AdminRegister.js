import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import { ValidateSignUp } from "./Validation";

const Register = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		userName: "",
		email: "",
		password: "",
		password2: "",
		IDnumber:"",
		contactNumber:"+94",
        userRole:"admin"
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
					navigate("/dashboard");
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
		<div>
			<center>
				<br></br>
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
			</center>
		</div>
	);
};

export default Register;
