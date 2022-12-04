import React, { useState } from "react";
import "../Posts/posts.css";
import { useSelector } from "react-redux";
import Like from "../../../Images/like.png";
import NotLike from "../../../Images/notlike.png";
import Comment from "../../../Images/comment.png";
import Share from "../../../Images/share.png";
import { likePost } from "../../../Redux/api/UploadRequest";

const ENV = process.env.REACT_APP_PUBLIC_FOLDER;

const Post = ({ postData }) => {
	const { image, desc, likes, _id} = postData;
	const user = useSelector((state) => state.authReducer.authData);
	const [liked, setLiked] = useState(likes.includes(user._id));
	const [numLikes, setNumLikes] = useState(likes.length);

	const handleLike = () => {
		setLiked((prev) => !prev);
        likePost(_id, user._id);
        liked ? setNumLikes((prev)=>prev - 1): setNumLikes((prev)=>prev + 1)
	};
    // console.log("Postdata", postData)
	return (
		<>
			<div className='Post'>
				<img src={image ? ENV + image : ""} alt='postImage' />
				<div className='postRectWrapper'>
					<img
						src={liked ? Like : NotLike}
						alt='likePng'
						onClick={handleLike}
					/>
					<img src={Comment} alt='CommentPng' />
					<img src={Share} alt='SharePng' />
				</div>
				<span>{numLikes} likes</span>
				<div className='details'>
					{/* <span>{name}</span> */}
					<span>{desc}</span>
				</div>
			</div>
		</>
	);
};

export default Post;
