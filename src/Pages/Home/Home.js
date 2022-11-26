import React from 'react'
import PostSide from '../../Components/PostSide/PostSide';
import ProfileSide from '../../Components/ProfileSIde/ProfileSide';
import RightSide from '../../Components/RghtSide/RightSide';
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <ProfileSide/>
            <PostSide/>
            <RightSide/> 
        </div>
    )
}

export default Home
