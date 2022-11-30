import React from 'react'
import Post from './Post/Post';
import PostShare from './PostShare/PostShare';

const PostSide = () => {
  return (
    <div className="postSideContainer">
      <PostShare/>
      <Post/>
    </div>
  )
}

export default PostSide
