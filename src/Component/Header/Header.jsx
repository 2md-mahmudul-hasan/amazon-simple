import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo" />

      <div className="header-menu">
        <Link to="/">Shop</Link>
        <Link to="orders">Order Review</Link>
        <Link to="inventory">Manage Inventory</Link>
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};

export default Header;