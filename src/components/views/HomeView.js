import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../container/Header';
import Footer from '../container/Footer';

const HomeView = () => {
  return (
    <>
      <Header />
      <main className='home-view'>
        <div className='banner'>
          <h1 className='title'>Markdown Blocks Editor</h1>
          <p className='subtitle'>
            A block based live editor to create Markdown text file.
          </p>
        </div>
        <Link to='/editor' className='start-btn'>
          Get started
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default HomeView;
