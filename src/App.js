import React from "react";
import { Landing, Error, Register, ProtectedRoute } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	Profile,
	AddJob,
	AllJobs,
	Stats,
	ShareLayout,
} from "./pages/Dashboard";
const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<ShareLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Stats />} />
					<Route path="all-jobs" element={<AllJobs />} />
					<Route path="add-jobs" element={<AddJob />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="landing" element={<Landing />} />
				<Route path="register" element={<Register />} />
				<Route path="*" element={<Error></Error>} />
			</Routes>
			<ToastContainer position="top-center" />
		</Router>
	);
};

export default App;
