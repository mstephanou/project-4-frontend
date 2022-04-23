import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav className='navbar has-background-light'>
        <div className='container'>
          <div className='navbar-menu '>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='/games/ ' className='navbar-item'>
              Index
            </Link>
            <Link to='/login/ ' className='navbar-item'>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
