import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo" />

      <div className="header-menu">
        <a href="order">Order</a>
        <a href="order-review">Order Review</a>
        <a href="manage-inventory">Manage Inventory</a>
        <a href="login">Login</a>
      </div>
    </div>
  );
};

export default Header;