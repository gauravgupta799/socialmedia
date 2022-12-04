import React from 'react'
import Posts from './Posts/Posts.js';
import PostShare from './PostShare/PostShare';

const PostSide = () => {
  return (
    <div className="postSideContainer">
      <PostShare/>
      <Posts/>
    </div>
  )
}

export default PostSide
