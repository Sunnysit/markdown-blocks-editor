import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { GITHUB_LINK } from '../../data/baseSetting';

//Font Awesome style
import { faHome, faEdit, faBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className='header'>
      <NavLink className='header-left' to='/'>
        <div className='logo-container'>
          <img
            className='logo'
            src={process.env.PUBLIC_URL + '/assets/img/MBE-logo.svg'}
            alt='MBE logo'
          />
        </div>
        <h2 className='header-title'>Markdown Blocks Editor</h2>
      </NavLink>

      <div className='header-right'>
        <nav>
          {/* <ul className='nav'>
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
            <li>
              <NavLink className='nav-btn' to='/about'>
                <FontAwesomeIcon icon={faBook} />
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <a className='nav-btn' target='blank' href={`${GITHUB_LINK}`}>
                <FontAwesomeIcon icon={faGithub} />
                <span>Github</span>
              </a>
            </li>
          </ul> */}
          <Menu right>
            <NavLink className='nav-btn' to='/'>
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </NavLink>
            <NavLink className='nav-btn' to='/editor'>
              <FontAwesomeIcon icon={faEdit} />
              <span>Editor</span>
            </NavLink>
            <NavLink className='nav-btn' to='/about'>
              <FontAwesomeIcon icon={faBook} />
              <span>About</span>
            </NavLink>
            <a className='nav-btn' target='blank' href={`${GITHUB_LINK}`}>
              <FontAwesomeIcon icon={faGithub} />
              <span>Github</span>
            </a>
          </Menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
