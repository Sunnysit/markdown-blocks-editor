import React from 'react';

import PreviewView from '../views/PreviewView';
import EditView from '../views/EditView';

const styles = {
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1
  }
};

const Body = () => {
  return (
    <main style={styles.mainContainer}>
      <EditView />
      <PreviewView />
    </main>
  );
};

export default Body;
