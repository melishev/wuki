import React from 'react';
import './index.scss';
// import propTypes from 'prop-types';

const WookieUI = () => {
  const allColumn = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <div className="container">
      {allColumn.map((item) => (
        <div style={background: `red`}>{item}</div>
      ))}
    </div>
  );
};

// WookieUI.propTypes = {
//   children: propTypes.node.isRequired,
// };

export default WookieUI;