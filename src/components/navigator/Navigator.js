import React from 'react';

const Navigator = ({ children }) => {
  return (
    <div
      className="flex flex-stretch flex-center p1 bg-white black border-bottom fixed top-0 left-0 right-0 z3"
      style={styles.base}>
      {children}
    </div>
  );
};

const styles = {
  base: {
    height: '4rem',
  },
};

export default Navigator;
