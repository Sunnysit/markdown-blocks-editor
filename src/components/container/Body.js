import React from 'react';

import ReviewView from '../views/ReviewView';
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
      <ReviewView />
    </main>
  );
};

export default Body;
