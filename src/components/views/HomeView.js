import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../container/Header';
import Footer from '../container/Footer';

import SupportElementsTable from '../widgets/homeView/SupportElementsTable';

const HomeView = () => {
  return (
    <>
      <Header />
      <main className='home-view'>
        <section className='banner'>
          <h1 className='title'>Markdown Blocks Editor</h1>
          <p className='subtitle'>
            A block based live editor to create Markdown text file.
          </p>
          <Link to='/editor' className='start-btn'>
            Get started
          </Link>
        </section>
        <section className='info-section'>
          <h2 className='title'>What is Markdown Blocks Editor?</h2>
          <p className='description'>
            Markdown Blocks Editor is an in-browser editor to generate Markdown
            text file. It wraps different types of Markdown elements into
            blocks. User can simply build a Markdown text file without
            memorizing the Markdown syntax.
          </p>
        </section>
        <section className='info-section'>
          <h2 className='title'>
            What types of elements does Markdown Blocks Editor support?
          </h2>
          <SupportElementsTable />
        </section>
        <section className='info-section'>
          <h2 className='title'>
            Can I use Markdown Blocks Editor on my phone?
          </h2>
          <p className='description'>
            Yes, Markdown Blocks Editor is responsive web app that you can use
            it on smartphone. However, in order to have better user experience,
            we highly recommend use it on Desktop/Laptop Browser.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomeView;
