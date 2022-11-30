import React from "react";
import "./profileCard.css";
import cover from "../../../Images/cover.jpg";
import profile from "../../../Images/profile.jpg";

const ProfileCard = () => {
	const ProfilePage =true;

	return (
		<div className='profileCard'>
			<div className='profileImages'>
				<img src={cover} alt='coverImg' />
				<img src={profile} alt='profileImg' />
			</div>
			<div className='profileName'>
				<span><b>Gaurav Gupta</b></span>
				<span>MERN Stack Developer</span>
			</div>
			<div className='followStatus'>
				<hr />
				<div className='fs-innerWrraper'>
					<div className='follow'>
						<span>8,989</span>
						<span>Followers</span>
					</div>
					<div className="vl"></div>
					<div className='follow'>
						<span>10</span>
						<span>Following</span>
					</div>
						{ProfilePage && (
							<>
								<div className="vl"></div>
								<div className="follow">
									<span>10</span>
									<span>Posts</span>
								</div>
							</>	
						)}
				</div>
				<hr />
			</div>
            {ProfilePage? "" :<span>My Profile</span>}
		</div>
	);
};

export default ProfileCard;
