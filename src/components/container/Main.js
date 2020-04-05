import React from 'react';
import { useSelector } from 'react-redux';
import HeaderMenu from './HeaderMenu';
import PreviewView from '../views/PreviewView';
import EditView from '../views/EditView';
import MarkdownView from '../views/MarkdownView';

const Main = () => {
  const showResultView = useSelector((state) => state.showResultView);
  return (
    <main className='main-container'>
      <HeaderMenu />
      <div className='views-container'>
        <EditView />
        <PreviewView />
      </div>

      <MarkdownView isVisible={showResultView} />
    </main>
  );
};

export default Main;
