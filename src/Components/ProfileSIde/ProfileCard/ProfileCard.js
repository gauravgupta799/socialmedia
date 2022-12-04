import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./profileCard.css";
import cover from "../../../Images/cover.jpg";
import profile from "../../../Images/profile.jpg";
import PostShare from "../../PostSide/PostShare/PostShare";

const ProfileCard = ({location}) => {
	const user = useSelector((state) => state.authReducer.authData.user);
	const posts = useSelector((state) => state.postReducer.posts)
	const {firstname,lastname,coverPic,profilePic,worksAt,followers,following, _id} = user;
	console.log("UserD", firstname)
	const ENV = process.env.REACT_APP_PUBLIC_FOLDER;
	
	return (
		<>
		<div className='profileCard'>
			<div className='profileImages'>
				<img src={coverPic ? ENV + coverPic : cover} alt='coverImg' />
				<img src={profilePic ? ENV + profilePic : profile} alt='profileImg' />
			</div>
			<div className='profileName'>
				<span>
					<b>
						{firstname} {lastname}
					</b>
				</span>
				<span>{worksAt ? worksAt : "Write about yourself"}</span>
			</div>
			<div className='followStatus'>
				<hr />
				<div className='fs-innerWrraper'>
					<div className='follow'>
						<span>{following?.length}</span>
						<span>Following</span>
					</div>
					<div className='vl'></div>
					<div className='follow'>
						<span>{followers?.length}</span>
						<span>{followers?.length > 0 ? "Followers" : "Follower"}</span>
					</div>

					{location === "profilePage" && (
						<>
							<div className='vl'></div>
							<div className='follow'>
								<span>{posts.filter((post) =>post.userId === _id).length}</span>
								<span>Posts</span>
							</div>
						</>
					)}
				</div>
				<hr />
			</div>
			{location === "profilePage" ? "" : (
				<span >
					<Link to={`/profile/${_id}`} style={{textDecoration:"none", color:"inherit"}}>My Profile</Link>
				</span>
			)}
		</div>
		 {location === "profilePage" && <PostShare/>}
		</>
	);
};

export default ProfileCard;
