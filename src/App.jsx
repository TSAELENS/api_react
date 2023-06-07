import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Auth />} />
					<Route path="/home" element={<Home />} />
					<Route path="/post" element={<Post />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
