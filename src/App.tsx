import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import Reader from "./pages/Reader";
import Writer from "./pages/Writer";
import Navbar from "./components/common/Navbar";
import SignUp2 from "./pages/SignUp2";

function currentPath(): string {
	const location = useLocation();
	return location.pathname;
}

const PAGES_WITH_NO_NAV_FOOTER = ["/", "/sign-up"];

function App(): JSX.Element {
	return (
		<>
			{!PAGES_WITH_NO_NAV_FOOTER.includes(currentPath()) && <Navbar />}
			<Routes>
				<Route path="/" index element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/sign-up" element={<SignUp2 />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/reader" element={<Reader />} />
				<Route path="/writer" element={<Writer />} />
			</Routes>
		</>
	);
}

export default App;
