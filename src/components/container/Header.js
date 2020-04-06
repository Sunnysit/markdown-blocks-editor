import React from 'react';
import logo from '../../assets/img/MBE-logo.svg';
import { NavLink } from 'react-router-dom';

//Font Awesome style
import { faHome, faEdit, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className='header'>
      <NavLink className='header-left' to='/'>
        <div className='logo-container'>
          <img className='logo' src={logo} alt='MBE logo' />
        </div>
        <h2 className='header-title'>Markdown Blocks Editor</h2>
      </NavLink>

      <div className='header-right'>
        <nav>
          <ul className='nav'>
            <li>
              <NavLink className='nav-btn' to='/'>
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-btn' to='/editor'>
                <FontAwesomeIcon icon={faEdit} />
                <span>Editor</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink className='nav-btn' to='/about'>
                <FontAwesomeIcon icon={faBook} />
                <span>About</span>
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
