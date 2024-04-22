import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import Reader from "./pages/Reader";
import Writer from "./pages/Writer";
import Navbar from "./components/common/Navbar";
import SignUp from "./pages/SignUp";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" index element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/reader" element={<Reader />} />
				<Route path="/writer" element={<Writer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
