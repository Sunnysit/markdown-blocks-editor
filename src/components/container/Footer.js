import React from 'react';
import { GITHUB_LINK } from '../../data/baseSetting';

//Font Awesome style
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className='footer'>
      <div></div>
      <p className='description'>
        &copy;2020 | Designed & Developed by{' '}
        <a className='sunny-link' target='blank' href='https://sunnyxue.com'>
          Sunny Xue
        </a>
      </p>
      <div>
        <a className='github-link' target='blank' href={`${GITHUB_LINK}`}>
          <FontAwesomeIcon icon={faGithub} />
          <span>Github</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
