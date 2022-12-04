import React, {useState, useEffect} from 'react';
import "./followers.css"
import {FollowersData} from "../../../Data/FollowersData.js";
import User from '../../User/User';
import {useSelector} from "react-redux";
import { getAllUser } from '../../../Redux/api/UserRequest';

const Followers = () => {
    const [persons , setPersons] = useState([]);
    const {user} = useSelector((state)=>state.authReducer.authData)


    useEffect(() => {
       const fetchPersons = async () => {
        const {data} = await getAllUser()
        setPersons(data)
        console.log("Data",data)
       }
       fetchPersons()
    },[]);

    return (
        <div className="followersCard">
            <h3>People you may know</h3>
            {
                persons.map((person,id)=>{
                    if(person?._id !== user?._id ){
                        return <User person = {person} key={id}/>
                    } 

                    
                })
            }
        </div>
    )
}

export default Followers
