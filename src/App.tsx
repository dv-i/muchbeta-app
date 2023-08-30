import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
