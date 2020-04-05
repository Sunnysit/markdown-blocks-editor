import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <main className='home-view'>
      <div className='banner'>
        <h1 className='title'>Markdown Blocks Editor</h1>
      </div>
      <Link to='/editor' className='start-btn'>
        Get started
      </Link>
    </main>
  );
};

export default HomeView;
