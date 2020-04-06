import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../container/Header';
import Footer from '../container/Footer';

const AboutView = () => {
  return (
    <>
      <Header />
      <main className='about-view'>
        <h1>About</h1>
      </main>
      <Footer />
    </>
  );
};

export default AboutView;
