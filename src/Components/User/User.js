import React,{useState} from "react";
import "../ProfileSIde/FollwersCard/followers.css";
import profile from "../../Images/profile.jpg";
import {useDispatch, useSelector} from "react-redux";
import { followUser, unFollowUser } from "../../Redux/Actions/UserAction";

const User = ({ person }) => {
	const {user} = useSelector((state) => state.authReducer.authData);
	const [following, setFollowing] = useState(person.following.includes(user._id));
	const ENV = process.env.REACT_APP_PUBLIC_FOLDER;
	const dispatch = useDispatch();
	const handleFollow = () => {
		!following ? dispatch(followUser(person._id, user))
        :dispatch(unFollowUser(person._id, user))
		setFollowing((prev)=>!prev);
	}
	return (
		<>
			<div className='followers'>
				<div className='flsInnerDiv'>
					<img
						src={person.coverPicture ? ENV + person?.profilePicture : profile}
						alt='profilePic'
					/>
					<div className='followerName'>
						<span>{person.firstname}</span>
						<span>@{person.username}</span>
					</div>
				</div>
				<button id='follow-btn' className='btn' onClick={handleFollow}>
					{following? "Unfollow" : "Follow"}
				</button>
			</div>
		</>
	);
};

export default User;
