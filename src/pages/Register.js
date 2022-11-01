import React from "react";
import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../components";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);

	const { user, isLoading } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setValues({ ...values, [name]: value });
		console.log(values);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		const { name, email, password, isMember } = values;
		if (!email || !password || (!isMember && !name)) {
			toast.error("Please Fill Out All Fields");
			return;
		}
		if (isMember) {
			dispatch(loginUser({ email, password }));
			return;
		}

		dispatch(registerUser({ name, email, password }));
	};
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};
	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate("/");
			}, 2000);
		}
	}, [user, navigate]);

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={onSubmit}>
				<Logo></Logo>
				<h3>{values.isMember ? "Login" : "Register"} </h3>
				{/* name field */}
				{!values.isMember && (
					<FormRow
						type="text"
						name="name"
						value={values.name}
						handleChange={handleChange}
					/>
				)}
				{/* email field */}
				<FormRow
					type="email"
					name="email"
					value={values.email}
					handleChange={handleChange}
				/>
				{/*passward field */}
				<FormRow
					type="password"
					name="password"
					value={values.password}
					handleChange={handleChange}
				/>
				<button disabled={isLoading} type="submit" className="btn btn-block">
					{values.isMember ? "Login" : "Register"}
				</button>
				<button
					type="button"
					className="btn btn-block btn-hipster"
					disabled={isLoading}
					onClick={() => {
						dispatch(
							loginUser({ email: "testing@gmail.com", password: 123456789 })
						);
					}}
				>
					{isLoading ? "loading..." : "demo App"}
				</button>
				<p>
					{values.isMember ? "Not a member yet?" : "Already a member?"}
					<button type="button" onClick={toggleMember} className="member-btn">
						{values.isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};

export default Register;
