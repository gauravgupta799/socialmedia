import React from "react";
import "./post.css";
import { PostsData } from "../../../Data/PostData";
import Like from "../../../Images/like.png";
import NotLike from "../../../Images/notlike.png";
import Comment from "../../../Images/comment.png";
import Share from "../../../Images/share.png";

const Post = () => {
	return (
		<div className='postsContainer'>
			{PostsData.map((post, id) => {
				return (
					<div className='Post' key={id}>
						<img src={post.img} alt='postImage' />
						<div className='postRectWrapper'>
							<img src={post.liked ? Like : NotLike} alt='likePng' />
							<img src={Comment} alt='CommentPng' />
							<img src={Share} alt='SharePng' />
						</div>
						<span>{post.likes} likes</span>
						<div className='details'>
							<span>{post.name}</span>
							<span>{post.desc}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Post;
