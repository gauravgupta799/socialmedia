import React from "react";
import "./profileSide.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import Search from "./SearchContr/Search";
import Followers from "./FollwersCard/Followers";

const ProfileSide = () => {
	return (
		<div className='profileSide'>
			<Search/>
            <ProfileCard location="homepage"/>
			<Followers/>
		</div>
	);
};

export default ProfileSide;