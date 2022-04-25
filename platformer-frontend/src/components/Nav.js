import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav className='navbar has-background-light'>
        {/* <i className='fa-brands fa-creative-commons-remix'></i> */}
        <div className='container'>
          <div className='navbar-menu '>
            <div className='navbar-start'>
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
        </div>
      </nav>
    </header>
  );
};
export default Nav;
