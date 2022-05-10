import React from 'react'
import './Navbar.css'
import {
    FaBell,
    FaWhmcs,
    FaBars
}from "react-icons/fa";
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import userLogo from '../../Assets/images/userlogo.png'
import bell from '../../Assets/images/Notification_Icon.svg'
import settings from '../../Assets/images/Settings_Icon.svg'
import searchIcon from '../../Assets/images/SEarch_Icon.svg'


function Navbar() {
 

  return (
    <div className='form'>
        <form>
            <MobileNavigation />
            <div className='searchBar'><input type="text"></input>
                <img className='searchbarIcon' src={searchIcon}></img>
            </div>
            <div className='header-icons'>
            <img className='userlogo'src={userLogo}></img>
            <img className='userlogo_bell'src={bell}></img>
            <img className='userlogo_settings'src={settings}></img>
            
            </div>
        </form>
    </div>
  )
}

export default Navbar