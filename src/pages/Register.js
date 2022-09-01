import React from "react";
import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);

	const handleChange = (event) => {
		console.log(event);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		console.log(event.target);
	};
	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={onSubmit}>
				<Logo></Logo>
				<h3>Login</h3>
				{/* name field */}
				<div className="form-row">
					<label htmlFor="name" className="form-label">
						name
					</label>
					<input
						type="text"
						value={values.name}
						name="name"
						onChange={handleChange}
						className="form-input"
					/>
				</div>
				<button type="submit" className="btn btn-block">
					submit{" "}
				</button>
			</form>
		</Wrapper>
	);
};

export default Register;
