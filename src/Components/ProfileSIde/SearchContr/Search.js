import React from "react";
import "./search.css";
import logo from "../../../Images/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

const Search = () => {
	return (
		<div className='searchContainer'>
			<img src={logo} alt='logo' />
			<div className='Search'>
				<input type='text' placeholder='#Explore' />
				<div className='s-icon'>
					<UilSearch />
				</div>
			</div>
		</div>
	);
};

export default Search;
