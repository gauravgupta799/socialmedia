import React from 'react'
import "./post.css";
import {PostsData} from "../../../Data/PostData";

const Post = () => {
  return (
    <div className="postContainer">
      {PostsData.map((post,id)=>{
        return(
          <>
          <div>
          <img src={post.img} alt="postImage"/>
          </div>
            <div className="actionsContainer">
              
            </div>
          </>
        )
      })}   
    </div>
  )
}

export default Post
