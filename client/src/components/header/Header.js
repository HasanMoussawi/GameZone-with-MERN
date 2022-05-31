import React from 'react'
import "./header.css";
import imgHeader from "../../assets/bf-bckd.jpg";


export default function Header() {
  return (
    <div className="header">
        <div className='headerTitles'>
            <span className='headerTitlesSmall'>Challenge Everything</span>
            <span className='headerTitlesLarge'>GameZone</span>
        </div>
        <img className='headerImg' src={imgHeader} alt=''/>
        
    
    
    </div>
  )
}
