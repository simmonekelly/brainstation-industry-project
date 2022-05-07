import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaRegFileAlt,
    FaRegIdCard,
    FaLongArrowAltRight
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import userlogo from '../../Assets/userlogo.png'
import './Sidebar.css'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Documents",
            icon:<FaTh/>
        },
        {
            path:"/events",
            name:"Events",
            icon:<FaRegFileAlt/>
        },
        {
            path:"/community",
            name:"Community",
            icon:<FaRegIdCard/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{display: isOpen ? "block" : "none"}} className="logo"><img src={userlogo} alt='logo'></img></div>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                           <div className='arrow' style={{display: isOpen ? "block" : "none"}}><FaLongArrowAltRight/></div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;