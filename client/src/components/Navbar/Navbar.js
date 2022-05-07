import React from 'react'
import './Navbar.css'
import {
    FaBell,
    FaWhmcs
}from "react-icons/fa";

function Navbar() {
  return (
    <div className='form'>
        <form>
            <input type="text" placeholder="Search.."></input>
            <FaBell />
            <FaWhmcs />
        </form>
    </div>
  )
}

export default Navbar