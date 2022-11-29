import React, { useState } from "react";
import "./auth.css";
import Logo from "../../Images/logo.png";

const Auth = () => {
	return (
		<div className='AuthContainer'>
			<div className='authLeft'>
				<img src={Logo} alt='' />
				<div className='webName'>
					<h1>GRK Media</h1>
					<h6>Expolre the ideas throughout the world.</h6>
				</div>
			</div>
			<SignUp />
		</div>
	);
};

function SignUp() {
	const [isSignup, setIsSignup] = useState(false);
	const [confirmPass, setConfirmPass] = useState(false);

	const [data, setData] = useState({
		firstname: "",
		lastname: "",
		username: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignup) {
			if (data.password !== data.confirmPassword) {
				setConfirmPass(true);
				setTimeout(() => {
					setConfirmPass(false);
				}, 1000);
			}
		}
	};
	const resetFrom = () => {
		setConfirmPass(false);
		setData({
			firstname: "",
			lastname: "",
			username: "",
			password: "",
			confirmPassword: "",
		});
	};
	const {firstname, lastname, username, password, confirmPassword} = data;	
	return (
			<div className='authRight' style={{ width: isSignup ? "35rem" : "25rem" }}>
			<form className='infoForm' onSubmit={handleSubmit}>
				<h2> {isSignup ? "Sign up" : "Login"}</h2>
				{isSignup && (
					<div>
						<input
							type='text'
							placeholder='First Name'
							name='firstname'
							className='infoInput'
							value={firstname}
							onChange={handleChange}
							required
						/>
						<input
							type='text'
							placeholder='Last Name'
							name='lastname'
							className='infoInput'
							value={lastname}
							onChange={handleChange}
							required
						/>
					</div>
				)}
				<div>
					<input
						type='text'
						placeholder='Username'
						name='username'
						className='infoInput'
						value={username}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<input
						type='password'
						placeholder='Password'
						name='password'
						className='infoInput'
						value={password}
						onChange={handleChange}
						required
					/>
					{isSignup && (
						<input
							type='password'
							placeholder='Confirm-Password'
							name='confirmPassword'
							className='infoInput'
							value={confirmPassword}
							onChange={handleChange}
							required
						/>
					)}
				</div>
				{confirmPass && (
					<span style={{ color: "red" }}>
						Password or confirm-password didn't match.
					</span>
				)}
				<div>
					<span style={{ fontSize: "14px" }}>
						{isSignup
							? "Already have an acccount? "
							: "Didn't have an acccount? "}
						<b
							style={{ cursor: "pointer" }}
							onClick={() =>{ 
									setIsSignup((prev) => !prev);
									resetFrom();
								}}
						>
							{isSignup ? "Login!" : "Sign up"}
						</b>
					</span>
				</div>
				<button className='btn submit-btn' type='submit'>
					{isSignup ? "Sign Up" : "Login"}
				</button>
			</form>
		</div>
	);
}
export default Auth;
