/** @format */

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layouts/Layout";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout></Layout>} />
			</Routes>
		</Router>
	);
}

export default App;
