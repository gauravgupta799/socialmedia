import React from "react";
import "./rightSide.css";
import Home from "../../Images/home.png";
import Noti from "../../Images/noti.png";
import Comment from "../../Images/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "./TrendCards/TrendCard";
import { Link } from "react-router-dom";

const RightSide = () => {
	return (
		<div className='rightSide'>
			<div className='navIcons'>
			   <Link to = "/home"><img src={Home} alt='Home' /></Link>
				<UilSetting />
				<img src={Noti} alt='Noti' />
				<img src={Comment} alt='Comment' />
			</div>
      <TrendCard/>
		</div>
	);
};

export default RightSide;
