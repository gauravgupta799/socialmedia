import React from 'react';
import "./profile.css";
import ProfileCard from '../../Components/ProfileSIde/ProfileCard/ProfileCard';
import Posts from '../../Components/PostSide/Posts/Posts';
import RightSide from '../../Components/RghtSide/RightSide';
import ProfileLeft from '../../Components/Profile/ProfileLeft';

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft/>
      <div className="Profile-center">
         <ProfileCard location="profilePage"/>
         <Posts/>
      </div>
      <RightSide/>
    </div>
  )
}
export default Profile