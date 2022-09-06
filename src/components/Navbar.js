import Wrapper from "../assets/wrappers/Navbar";

import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, toggleSidebar } from "../features/user/userSlice";

const Navbar = () => {
	const { user } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const [showLogout, setShowlogOut] = useState(false);
	const toggle = () => {
		dispatch(toggleSidebar());
	};
	return (
		<Wrapper>
			<div className="nav-center">
				<button type="button" onClick={toggle} className="toggle-btn">
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h3 className="logo-text">dashboard</h3>
				</div>
				<div className="btn-container">
					<button
						type="button"
						className="btn"
						onClick={() => {
							setShowlogOut(!showLogout);
						}}
					>
						<FaUserCircle />
						<span className="user">{user?.name}</span>
						<FaCaretDown />
					</button>
					<div
						className={`${showLogout ? "dropdown show-dropdown" : "dropdown"}`}
					>
						<button
							className="dropdown-btn"
							type="button"
							onClick={() => {
								dispatch(logoutUser());
							}}
						>
							logout
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
