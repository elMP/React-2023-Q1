import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.css';

export type HeaderProps = { title: string };

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header>
        <nav className='navigation'>
          <ul className='navigation__list'>
            <li><NavLink to='/' className={({ isActive }) =>
              isActive ? "navigation__link active" : "navigation__link"
            }>Main Page</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) =>
              isActive ? "navigation__link active" : "navigation__link"
            }>About Us</NavLink></li>
          </ul>
        </nav>
        <h2>{this.props.title} </h2>
      </header>
    )
  }
}

export default Header;
