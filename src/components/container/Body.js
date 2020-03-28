import React from 'react';
import { useSelector } from 'react-redux';
import PreviewView from '../views/PreviewView';
import EditView from '../views/EditView';
import MarkdownView from '../views/MarkdownView';

const styles = {
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1
  }
};

const Body = () => {
  const showResultView = useSelector((state) => state.showResultView);
  return (
    <main style={styles.mainContainer}>
      <EditView />
      <PreviewView />
      <MarkdownView isVisible={showResultView} />
      {/* <img src='https://source.unsplash.com/random/200x150' alt='' /> */}
    </main>
  );
};

export default Body;
