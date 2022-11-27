import React from "react";
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
		   {/* <SignUp/> */}
           <Login/>
		</div>
	);
};

function SignUp() {
	return (
		<div className='authRight'>
			<form className='infoForm'>
				<h2>Sign up</h2>
				<div>
					<input
						type='text'
						placeholder='First Name'
						name='firstName'
						className='infoInput'
					/>
					<input
						type='text'
						placeholder='Last Name'
						name='laststName'
						className='infoInput'
					/>
				</div>
				<div>
					<input
						type='text'
						placeholder='Username'
						name='username'
						className='infoInput'
					/>
				</div>
				<div>
					<input
						type='password'
						placeholder='Password'
						name='password'
						className='infoInput'
					/>
					<input
						type='password'
						placeholder='Confirm-Password'
						name='confirm-password'
						className='infoInput'
					/>	
				</div>
                <div>
                    <span style={{fontSize:"14px"}}>Already have an acccount? <b style={{cursor:"pointer"}}>Login!</b></span>
                </div>
                <button className="btn submit-btn" type="submit">Signup</button>
			</form>
		</div>
	);
}
function Login() {
	return (
		<div className='authRight loginDiv'>
			<form className='infoForm'>
				<h2>Log In</h2>
				<div>
					<input
						type='text'
						placeholder='Username'
						name='username'
						className='infoInput'
					/>
				</div>
				<div>
					<input
						type='password'
						placeholder='Password'
						name='password'
						className='infoInput'
					/>
				</div>
                <div>
                    <span style={{fontSize:"14px"}}>Didn't have an acccount? <b style={{cursor:"pointer"}}>Singup!</b></span>
                </div>
                <button className="btn submit-btn" type="submit">Login</button>
			</form>
		</div>
	);
}

export default Auth;
