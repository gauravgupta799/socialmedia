import React from "react";
import "../ProfileSIde/FollwersCard/followers.css"

const User = ({person}) => {
	return (
		<>
			<div className='followers'>
				<div className='flsInnerDiv'>
					<img src={person.img} alt='' />
					<div className='followerName'>
						<span>{person.name}</span>
						<span>@{person.username}</span>
					</div>
				</div>
				<button id='follow-btn' className='btn'>
					Follow
				</button>
			</div>
		</>
	);
};

export default User;
