import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<Login />} />
				<Route path="/about" element={<> About </>} />

				{/* <Route path="/*" element={<Home />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
