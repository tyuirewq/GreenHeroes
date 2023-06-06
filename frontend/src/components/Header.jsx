// import React, { useState } from 'react'
import './headercss.css'
import { Link } from 'react-router-dom';
import myImage from './../image/logo.jpg';
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/SearchOutlined'
import Notification from '@mui/icons-material/Notifications'
import ProfileIcon from '@mui/icons-material/People'
import LogoutIcon from '@mui/icons-material/Logout'


const Header = ({toggleSidebar, isOpen }) => {

  return (
    <header>
      <div className="header-left">
        <img src={myImage} alt="Company Logo" style={{ paddingLeft: "-5vh" }} />
        {isOpen && (
            <h1>Green Heros</h1>
        )}
        <button className="menu-icon" onClick={toggleSidebar}><MenuIcon style={{ fontSize: "1.8em" }} /></button>

      </div>
      <div className="header-middle">
        <h1>Enjoy Yourself!</h1>
      </div>
      <div className="header-right">
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit"><SearchIcon /></button>
        </form>
        <div className="header-icons">
          <button className="notification-icon"><Notification /></button>
          <button className="profile-icon"><ProfileIcon /></button>
          <Link to="/" style={{textDecoration:"none"}}><button className="logout-icon"> <LogoutIcon/></button></Link> 
        </div>
      </div>
    </header>
  )
}

export default Header
