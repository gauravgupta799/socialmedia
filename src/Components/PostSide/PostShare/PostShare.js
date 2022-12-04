import React, { useState, useRef } from "react";
import "./postShareStyle.css";
import Profile from "../../../Images/profile.jpg";
import {useSelector ,useDispatch} from "react-redux";
import {
	UilScenery,
	UilPlayCircle,
	UilLocationPoint,
	UilSchedule,UilTimes
} from "@iconscout/react-unicons";
import { UploadImage, uploadPost } from "../../../Redux/Actions/UploadAction";


const PostShare = () => {
	const [image, setImage] = useState(null);
	const user = useSelector((state) => state.authReducer.authData.updatedUser)
	// const {profilePic} = user
	const loading =useSelector((state) => state.postReducer.uploading)
	const imgRef = useRef();
	const descRef = useRef();
    const dispatch = useDispatch();
    const ENV = process.env.REACT_APP_PUBLIC_FOLDER;
	const handleFile = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			setImage(img);
		}
	};
      const resetPost = () => {
        setImage(null);
		descRef.current.value="";
	  }
	const handleShare = async (e) => {
       e.preventDefault();
	   let newPost = {
		 userId:user._id,
		 desc:descRef.current.value
	   }
	   if(image){
		const data = new FormData()
		const filename = Date.now() + image.name
		data.append("name", filename) 
		data.append("file", image);
		newPost.image = filename;
		try {
		 dispatch(UploadImage(data));
		}catch (error) {
		   console.log(error)
		}
	   }
	   dispatch(uploadPost(newPost));
	   resetPost();
	}

	return (
		<div className='postShareContainer'>
			<img src={user?.profilePicture ? ENV + user?.profilePicture  : Profile} alt='profileImg' />
			<div>
				<input type='text' placeholder="What's happenning?" ref={descRef} required/>
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
					<button id='share-btn' className='btn' 
					   disabled={loading}
					    onClick={handleShare}>
						{ loading ? "Uploading..." : "Share"}
					</button>
					<div style={{ display: "none" }}>
						<input type='file' alt='file'name="myImage" ref={imgRef} onChange={handleFile} />
					</div>
				</div>
                { image && 
                     <div className="previewImage">
                        <UilTimes onClick={()=>setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="prevImg"/>
                     </div> 
                }
			</div>
		</div>
	);
};

export default PostShare;
