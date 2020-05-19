import React from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav className="NavBar">
      <h1 className="Title"><Link to='/'>HomeBrew</Link></h1>
      <ul className="NavList">
        <li className="NavItem"><Link to='/favorites'>Favorites</Link></li>
        <li className="NavItem"><Link>Settings</Link></li>
        <li className="NavItem" onClick={props.logout}>Logout</li>
      </ul>
    </nav>
  )
}

export default NavBar;
