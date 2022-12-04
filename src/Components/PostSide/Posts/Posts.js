import React,{useEffect} from "react";
import "./posts.css";
import {useSelector,useDispatch} from "react-redux";
import getTimelinePosts from "../../../Redux/Actions/TimelineAction";
import Post from "../Post/Post";

const Posts = () => {
	const user = useSelector((state) => state.authReducer.authData.user);
	const {posts, loading } = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();

	useEffect(() =>{
      dispatch(getTimelinePosts(user._id));
	},[])

	return (
		<div className='postsContainer'>
			{ loading ? "Fetching Posts...." : posts.map((post, id) => {
				return <Post postData={post} key={id}/>
			   })
			}
		</div>
	);
};

export default Posts;