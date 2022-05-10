import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import {
    FaBars,
    FaRegFileAlt,
    FaRegIdCard,
    FaAngleRight,
    FaRegFile
}from "react-icons/fa";
import './MobileNavigation.css'
import userlogo from '../../Assets/images/userlogo.png'
import { useRef } from 'react';
import {AiOutlineClose} from "react-icons/ai"

const menuItem=[
    {
        path:"/",
        name:"Documents",
        icon:<FaRegFile/>,
        menuIcon :  <FaAngleRight/>
    },
    {
        path:"/events",
        name:"Events",
        icon:<FaRegFileAlt/>,
        menuIcon :  <FaAngleRight/>
    },
    {
        path:"/community",
        name:"Community",
        icon:<FaRegIdCard/>,
        menuIcon :  <FaAngleRight/>
    }
]

function MobileNavigation() {
    const [showMenu, setShowMenu] = useState(false)

    const toggle = () => setShowMenu(!showMenu)

    const btnRef = useRef();

    // useEffect (() =>{

    //     const closeDown = (e) => {
    //         console.log(e)
    //         if( e.path[1] !== btnRef.current && e.path[0].tagName !== 'path' && e.path[0].tagName !== 'svg'){
    //             setShowMenu(false)
    //         }
            
    //     }

    //     document.body.addEventListener('click',closeDown );

    //     return () => document.body.removeEventListener('click', closeDown)
    // }, [])
  
  return (
      <div className='menu-container' activeClassName="menu-active" style={{width: showMenu ? "200px" : "20px",backgroundColor: showMenu? "green" : "white",padding: showMenu ? "20px" : "10px"}}>
    <nav>
    <div style={{width: showMenu ? "200px" : "20px", backgroundColor: showMenu? "green" : "white" , height:showMenu ? "100vh" : "20px"}} className="mobile-navigation">
               <div className="mobile-section">
                    <div className="mobile-bars" ref={btnRef} style={{display: showMenu ? "none" : "block"}}> <FaBars onClick={toggle}  style={{height:showMenu ? "40px" : "40px"}}/></div>
                    <div className="mobile-bars" ref={btnRef} style={{display: showMenu ? "block" : "none" , color: "white" , position: 'relative', bottom : "28px", left:"200px",}} > <AiOutlineClose onClick={toggle}  style={{height:showMenu ? "40px" : "40px"}}/></div>
                
                <div style={{display: showMenu ? "flex" : "none"}} className="mobile-logo"><img src={userlogo} alt='logo'></img></div>
                   
                      
               </div>
       {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="mobile-link" activeClassName="mobile-active">
                           <div className='mobiletext-container'>
                           <div style={{display: showMenu ? "block" : "none" }} className="icon">{item.icon}</div>
                           <div style={{display: showMenu ? "block" : "none" }} className="link_text" onClick={toggle}>{item.name}</div>
                           </div>
    
                       </NavLink>
                   ))
               }
    </div>
    </nav>
    </div>

  )
}

export default MobileNavigation