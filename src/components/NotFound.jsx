// src/components/NotFound.jsx

import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page or asset you are looking for does not exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default NotFound;