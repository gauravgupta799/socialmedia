import "./App.css";
import Auth from "./Pages/Auth/Auth";
import Home from './Pages/Home/Home';
import Profile from "./Pages/Profile/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import Darkmode from "./Components/DarkMode/Darkmode";

function App() {
	const user = useSelector((state) => state.authReducer.authData);
	return (
		<div className='App'>
			<div className='blur blur1'></div>
			<div className='blur blur2'></div>
			{/* <Darkmode/> */}
			<Routes>
				<Route path='/'
					element={user ? <Navigate to='/home' /> : <Navigate to='auth' />}
				/>
				<Route path='/home'
					element={user ? <Home/> : <Navigate to='../auth' />}
				/>
				<Route path='/auth'
					element={user ? <Navigate to='../home' />: <Auth/>}
				/>
				<Route path='/profile/:id'
					element={user ? <Profile/>:<Navigate to='../auth' />}
				/>
				
			</Routes>
		</div>
	);
}

export default App;
