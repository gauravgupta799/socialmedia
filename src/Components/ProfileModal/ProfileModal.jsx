import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import { Modal, useMantineTheme } from "@mantine/core";
import { UploadImage} from "../../Redux/Actions/UploadAction";
import { updateUser } from '../../Redux/Actions/UserAction';

const Styles = {
    padding:"0.5rem 3rem",
    fontSize:"16px"
}

function ProfileModal({ modalOpened, setOpenedModal,data }) {
	const theme = useMantineTheme();
    const {password, ...other} = data;
	const [formData, setFormData] = useState(other);
	const [profileImage, setProfileImage] = useState(null);
	const [coverImage, setCoverImage] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();
	// const {user} = useSelector((state)=> state.authReducer.authData);
     
	const handleChange=(e)=>{
       setFormData({...formData, [e.target.name]:e.target.value})
	}

	const handleImageChange =(e)=>{
        if(e.target.files && e.target.files[0]){
			let img = e.target.files[0];
			e.target.name === "profileImage" ? setProfileImage(img):setCoverImage(img)
		}
	}

	const handleUpdate =(e)=>{
		e.preventDefault();
		let UserData = formData;
		if(profileImage){
			const data = new FormData();
			const filename = Date.now() + profileImage.name;
			data.append("name", filename)
			data.append("file", profileImage);
			UserData.profilePicture = filename;
		}
		try{
           dispatch(UploadImage(data));
		}catch(err){
			console.log(err)
		}
		if(coverImage){
			const data = new FormData();
			const filename = Date.now() + coverImage.name;
			data.append("name", filename)
			data.append("file", coverImage);
			UserData.coverPicture = filename
		}
		try{
			dispatch(UploadImage(data));
		 }catch(err){
			 console.log(err)
		 }
		 dispatch(updateUser(params.id, UserData));
		 setOpenedModal(false)
	}

	return (
		<Modal
			overlayColor={
				theme.colorScheme === "dark"
					? theme.colors.dark[9]
					: theme.colors.gray[2]
			}
			overlayOpacity={0.55}
			overlayBlur={3}
            size="55%"
			opened={modalOpened}
			onClose={() => setOpenedModal(false)}
		>
			<form className='infoForm'>
				<h2>Your Info</h2>
				<div>
					<input
						type='text'
						className='infoInput'
						name='firstname'
						placeholder='First Name'
						value={formData.firstname}
						onChange={handleChange}
					/>
					<input
						type='text'
						className='infoInput'
						name='lastname'
						placeholder='Last Name'
						value={formData.lastname}
						onChange={handleChange}
					/>
				</div>
                <div>
                    <input
                            type='text'
                            className='infoInput'
                            name='worksAt'
                            placeholder='Works At'
							value={formData.worksAt}
							onChange={handleChange}
                        />
                </div>
                <div>
					<input
						type='text'
						className='infoInput'
						name='livesin'
						placeholder='Lives In'
						value={formData.livesin}
						onChange={handleChange}
					/>
					<input
						type='text'
						className='infoInput'
						name='country'
						placeholder='Country'
						value={formData.country}
						onChange={handleChange}
					/>
				</div>
                <div>
                    <input
                            type='text'
                            className='infoInput'
                            name='relationship'
                            placeholder='Relationship Status'
							value={formData.relationship}
							onChange={handleChange}
                        />
                </div>
                <div>
                <label>Profile Image</label>
					<input
						type='file'
						name='profileImage'
						onChange={handleImageChange}
					/>
                  <label>Cover Image</label>
					<input
						type='file'
						className=''
						name='coverImage'
						onChange={handleImageChange}
					/>
				</div>
                <button className='btn' style={Styles} onClick={handleUpdate}>Update</button>
			</form>
		</Modal>
	);
}

export default ProfileModal;
