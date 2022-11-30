import React from 'react';
import "./followers.css"
import {FollowersData} from "../../../Data/FollowersData.js";

const Followers = () => {
    return (
        <div className="followersCard">
            <h3>Who is following you</h3>
            {
                FollowersData.map((follower,id)=>{
                    return(
                        <div className="followers" key={id}>
                            <div className="flsInnerDiv">
                                <img src={follower.img} alt="" />
                                <div className="followerName">
                                    <span>Andrew Thomas</span>
                                    <span>@AndrewThomas</span>
                                </div>
                            </div>
                            <button id="follow-btn" className="btn">Follow</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Followers
