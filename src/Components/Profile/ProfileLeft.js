import React from "react";
import Search from "../ProfileSIde/SearchContr/Search.js";
import Followers from "../ProfileSIde/FollwersCard/Followers.js";
import "./profileLeft.css";

import { UilPen } from "@iconscout/react-unicons";

const ProfileLeft = () => {
	return (
		<div className='profileLeftContainer'>
			<Search />
			<div className='profileInfoCard'>
				<div className='infoHead'>
					<h3>Your Info</h3>
					<UilPen width='2rem' height="1.2rem" cursor="pointer" />
				</div>
				<div className='infoDesc'>
					<span>
						<b>Status</b> in Relationship
					</span>
					<span>
						<b>Lives in</b> Lucknow
					</span>
					<span>
						<b>Works at</b> TCS Private Ltd.
					</span>
				</div>
                <button className="btn" id="logout-btn">Logout</button>
			</div>
			<Followers />
		</div>
	);
};

export default ProfileLeft;
