import { useState } from "react";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
	const { isLoading, user } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({
		name: user?.name || "",
		email: user?.email || "",
		lastName: user?.lastName || "",
		location: user?.location || "",
	});

	const HandleSubmit = (event) => {
		event.preventDefault();
		const { name, lastName, email, location } = userData;
		if (!name || !email || !lastName || !location) {
			toast.error("please fill out all values");
			return;
		}
		dispatch(updateUser(userData));
	};
	const HandleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setUserData({
			...userData,
			[name]: value,
		});
	};
	return (
		<Wrapper>
			<form className="form" onSubmit={HandleSubmit}>
				<h3>profile</h3>
				<div className="form-center">
					<FormRow
						type="text"
						name="name"
						value={userData.name}
						handleChange={HandleChange}
					/>
					<FormRow
						type="text"
						name="lastName"
						value={userData.lastName}
						handleChange={HandleChange}
						labelText="Last Name"
					/>
					<FormRow
						type="email"
						name="email"
						value={userData.email}
						handleChange={HandleChange}
					/>
					<FormRow
						type="text"
						name="location"
						value={userData.location}
						handleChange={HandleChange}
					/>

					<button type="submit" className="btn btn-block" disabled={isLoading}>
						{isLoading ? "please wait..." : "save changes"}
					</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default Profile;
