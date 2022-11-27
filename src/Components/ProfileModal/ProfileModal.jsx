import { Modal, useMantineTheme } from "@mantine/core";

const Styles = {
    padding:"0.5rem 3rem",
    fontSize:"16px"
}

function ProfileModal({ modalOpened, setOpenedModal }) {
	const theme = useMantineTheme();

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
						name='firstName'
						placeholder='First Name'
					/>
					<input
						type='text'
						className='infoInput'
						name='lastName'
						placeholder='Last Name'
					/>
				</div>
                <div>
                    <input
                            type='text'
                            className='infoInput'
                            name='worksAt'
                            placeholder='Works At'
                        />
                </div>
                <div>
					<input
						type='text'
						className='infoInput'
						name='livesIn'
						placeholder='Lives In'
					/>
					<input
						type='text'
						className='infoInput'
						name='Country'
						placeholder='Country'
					/>
				</div>
                <div>
                    <input
                            type='text'
                            className='infoInput'
                            name='relationship'
                            placeholder='Relationship Status'
                        />
                </div>
                <div>
                <label>Profile Image</label>
					<input
						type='file'
						name='profileImg'
					/>
                  <label>Cover Image</label>
					<input
						type='file'
						className=''
						name='CoverImg'
					/>
				</div>
                <button className='btn' style={Styles}>Update</button>
			</form>
		</Modal>
	);
}

export default ProfileModal;
