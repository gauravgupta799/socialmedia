import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Search from "../ProfileSIde/SearchContr/Search.js";
import Followers from "../ProfileSIde/FollwersCard/Followers.js";
import "./profileLeft.css";
import * as UserApi from "../../Redux/api/UserRequest";

import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal.jsx";
import { logout } from "../../Redux/Actions/AuthAction.js";

const ProfileLeft = () => {
	const [openedModal, setOpenedModal] = useState(false);
	const [profileUser, setProfileUser] = useState({});
	const user = useSelector((state) => state.authReducer.authData.user);
	const dispatch = useDispatch();
	const params = useParams();
	const profileUserId = params.id;

	useEffect(() => {
		const fetchProfileUser = async () => {
			if (profileUserId === user._id) {
				setProfileUser(user);
				// console.log("User", user)
			} else {
				const profileUser = await UserApi.getUser(profileUserId);
				setProfileUser(profileUser);
				// console.log("prfileUser" ,profileUser);
			}
		};
		fetchProfileUser();
	}, [user]);

	return (
		<div className='profileLeftContainer'>
			<Search />
			<div className='profileInfoCard'>
				<div className='infoHead'>
					<h3>ProfileInfo</h3>
					{user._id === profileUserId ? (
						<>
							<UilPen
								width='2rem'
								height='1.2rem'
								cursor='pointer'
								onClick={() => setOpenedModal(true)}
							/>
							<ProfileModal
								modalOpened={openedModal}
								setOpenedModal={setOpenedModal}
								data={user}
							/>
						</>
					) : (
						""
					)}
				</div>
				<div className='infoDesc'>
					<span>
						<b>Status</b> {profileUser.relationship}
					</span>
					<span>
						<b>Lives in</b> {profileUser.livesin}
					</span>
					<span>
						<b>Works at</b> {profileUser.worksAt}
					</span>
				</div>
				<button
					className='btn'
					id='logout-btn'
					onClick={() => dispatch(logout())}
				>
					Logout
				</button>
			</div>
			<Followers />
		</div>
	);
};

export default ProfileLeft;
