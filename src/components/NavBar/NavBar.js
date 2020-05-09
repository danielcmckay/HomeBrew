import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1 className="Title">HomeBrew</h1>
      <ul className="NavList">
        <li className="NavItem">Saved</li>
        <li className="NavItem">Settings</li>
        <li className="NavItem">Account</li>
      </ul>
    </nav>
  )
}

export default NavBar
