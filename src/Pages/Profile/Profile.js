import React from 'react';
import "./profile.css";
import ProfileCard from '../../Components/ProfileSIde/ProfileCard/ProfileCard';
import Post from '../../Components/PostSide/Post/Post';
import RightSide from '../../Components/RghtSide/RightSide';
import ProfileLeft from '../../Components/Profile/ProfileLeft';

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft/>
      <div className="Profile-center">
         <ProfileCard/>
         <Post/>
      </div>
      <RightSide/>
    </div>
  )
}
export default Profile