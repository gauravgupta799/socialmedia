import React, { useState, useRef } from "react";
import "./postShareStyle.css";
import Profile from "../../../Images/profile.jpg";
import {
	UilScenery,
	UilPlayCircle,
	UilLocationPoint,
	UilSchedule,UilTimes
} from "@iconscout/react-unicons";

const PostShare = () => {
	const [image, setImage] = useState(null);
	const imgRef = useRef();

	const handleFile = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			setImage({
				image: URL.createObjectURL(img),
			});
		}
	};

	return (
		<div className='postShareContainer'>
			<img src={Profile} alt='profileImg' />
			<div>
				<input type='text' placeholder="What's happenning?" />
				<div className='postOptions'>
					<div className='option' 
                    onClick={()=>imgRef.current.click()}
                    >
						<UilScenery />
						<span>Photo</span>
					</div>
					<div className='option'>
						<UilPlayCircle />
						<span>Video</span>
					</div>
					<div className='option'>
						<UilLocationPoint />
						<span>Location</span>
					</div>
					<div className='option'>
						<UilSchedule />
						<span>Schedule</span>
					</div>
					<button id='share-btn' className='btn'>
						Share
					</button>
					<div style={{ display: "none" }}>
						<input type='file' alt='file'name="myImage" ref={imgRef} onChange={handleFile} />
					</div>
				</div>
                { image && 
                     <div className="previewImage">
                        <UilTimes onClick={()=>setImage(null)} />
                        <img src={image.image} alt="prevImg"/>
                     </div> 
                }
			</div>
		</div>
	);
};

export default PostShare;
