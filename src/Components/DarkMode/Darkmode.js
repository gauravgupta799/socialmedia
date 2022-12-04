import React, { useEffect } from "react";
import "./Dark.css";

const Darkmode = () => {
	useEffect(() => {
		if (localStorage.getItem("dark")) {
			document.body.classList.add("dark");
		}
	}, []);

	const handleToggled = (e) => {
		document.body.classList.toggle("dark");
		localStorage.setItem("dark", document.body.className);
	};
	return (
		<>
			<label>
				<input
					type='checkbox'
					className='CheckboxInput'
					onChange={handleToggled}
				/>
				<span className='switch'>
					<span className='handle'></span>
				</span>
			</label>
		</>
	);
};

export default Darkmode;
