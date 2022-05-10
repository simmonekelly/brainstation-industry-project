import React, { useState } from 'react';
import {
    FaBars,
    FaRegFileAlt,
    FaRegIdCard,
    FaAngleRight,
    FaRegFile
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import userlogo from '../../Assets/images/userlogo.png'
import './Sidebar.css'
import homelogo from '../../Assets/images/Home_Icon.svg'
import resorucesIcon from '../../Assets/images/Resources_Icon.svg'
import eventsIcon from '../../Assets/images/Events_Icon.svg'
import socialIcon from '../../Assets/images/Social_Icon.svg'
import contactIcon from '../../Assets/images/Contact_icon.svg'
const btnRef = React.createRef()
const menuItem=[
    {
        path:"/",
        name:"Home",
        icon: homelogo,
        menuIcon :  <FaAngleRight/>
    },
    {
        path:"/resources",
        name:"Resources",
        icon: resorucesIcon,
        menuIcon :  <FaAngleRight/>
    },
    {
        path:"/events",
        name:"Events",
        icon:eventsIcon,
        menuIcon :  <FaAngleRight/>
    },
    {
        path:"/social",
        name:"Social",
        icon: socialIcon,
        menuIcon :  <FaAngleRight/>
    },
    {
        path:"/contactus",
        name:"Contact us",
        icon:contactIcon,
        menuIcon :  <FaAngleRight/>
    }
]

class Sidebar extends Component {
    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);

    state ={
        isOpen : false
    }


      toggleNavbar = (e) => {

        if (this.state.isOpen) {
            this.setState({
                isOpen: false
            })
        } else{
            this.setState({
                isOpen: true
            })
        }
        
      };

      

    render(){    
    return (
        <div className="container">
           <div style={{width: this.state.isOpen ? "170px" : "50px"}} className="sidebar">
               <div className="top_section">
                    <div style={{marginLeft: this.state.isOpen ? "50px" : "0px"}} className="bars"> <FaBars onClick={this.toggleNavbar}/>
                   </div>   
               </div>
               <div className='logo_section'>
               <div style={{display: this.state.isOpen ? "flex" : "flex"}} className="logo"><img src={contactIcon} alt='logo'></img></div>
               
               </div>
               {menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active" style={{marginLeft: this.state.isOpen ? "24px" : "0px", justifyContent: this.state.isOpen ? "flex-start" : "center" }}>
                          
                           <div  className='text-container'>
                           <div style={{display: this.state.isOpen ? "none" : "block" }} className="icon" ><img src={item.icon}></img></div>
                           <div style={{display: this.state.isOpen ? "block" : "none" }} className="link_text" ><h4>{item.name}</h4></div>
                           </div>
                         
                       </NavLink>
                   ))
               }
           </div>
           <main>{this.props.children}</main>
        </div>
    );
            }
};

export default Sidebar;