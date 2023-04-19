import React, { useContext } from 'react';
import './header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { authContext } from '../../provider/ContextProvider';

const Header = () => {
  const { logOut, user } = useContext(authContext)
  const handleLoOut = () => {
    logOut()
      .then(() => {
        console.log('sign out success')
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div className='header'>
      <img src={logo} alt="logo" />

      <div className="header-menu">
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>

        <Link to="/signup">Sign Up</Link>
        {user ?
          <div><span className=" dark:text-white">{user.email}</span>
            <button className='btn-danger' onClick={handleLoOut}>Log out</button> </div>
          : <button ><Link to="/login">Login</Link></button>
        }

      </div>
    </div>
  );
};

export default Header;