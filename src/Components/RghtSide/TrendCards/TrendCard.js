import React, {useState} from 'react'
import "./trendCard.css";
import {TrendData} from "../../../Data/TrendDatas.js"
import ShareModal from '../../ShareModal/ShareModal';

const TrendCard = () => {
  const [shareModal, setShareModal] = useState(false);

  return (
    <div className="trendCards">
        <h3>Trends for you</h3>
        {TrendData.map((trend,id)=>{
            const {name,shares} = trend
            return(
                <div className="trends" key={id}>
                <span>#{name}</span>
                <span>{shares}k shares</span>
                </div>
            )
        })}

        <button className="btn rShare-btn" onClick={()=>setShareModal(true)}>
            Share
        </button>
        <ShareModal shareModal={shareModal} setShareModal={setShareModal} />
    
    </div>
  )
}
export default TrendCard