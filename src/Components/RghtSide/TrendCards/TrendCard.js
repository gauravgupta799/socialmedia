import React from 'react'
import "./trendCard.css";
import {TrendData} from "../../../Data/TrendDatas.js"

const TrendCard = () => {
  return (
    <div className="trendCards">
        <h3>Trends for you</h3>
        {TrendData.map((trend,id)=>{
            const {name,shares} = trend
            return(
                <div className="trends">
                <span>#{name}</span>
                <span>{shares}k shares</span>
                </div>
            )
        })}

        <button className="btn rShare-btn">
            Share
        </button>
    
    </div>
  )
}

export default TrendCard