import React from "react";
import "./rightSide.css";
import Home from "../../Images/home.png";
import Noti from "../../Images/noti.png";
import Comment from "../../Images/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "./TrendCards/TrendCard";

const RightSide = () => {
	return (
		<div className='rightSide'>
			<div className='navIcons'>
				<img src={Home} alt='Home' />
				<UilSetting />
				<img src={Noti} alt='Noti' />
				<img src={Comment} alt='Comment' />
			</div>
      <TrendCard/>
		</div>
	);
};

export default RightSide;
