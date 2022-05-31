import React, { useEffect, useState } from 'react'
import "./sidebar.css";
import imgSidebar from "../../assets/bf1-general-gamelogo.png";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[])
  return (
    <div className='sideBar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>About Me</span>
            <img 
                src={imgSidebar}
                alt=''
                className='sideBarImage'
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>Categories</span>
            <ul className='sidebarList'>
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className='sidebarListItem'>{c.name}</li>
                    </Link>
                ))}
                

            </ul>
        </div>
    <div className="sidebarItem">
        <span className='sidebarTitle'>Follow us</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
    
    </div>
    </div>
  )
}
