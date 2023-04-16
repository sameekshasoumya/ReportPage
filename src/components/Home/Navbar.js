import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div className='cont'>
              <div className='upper'>T H E  N.G.O</div>
              <div className='lower'>M A N A G E M E N T</div>
            </div> 
            <img src="data:image/jpeg;base64,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" width="50" height="50"></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About NGO
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Items
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Connect
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONNECT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
