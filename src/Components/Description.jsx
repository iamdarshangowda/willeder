import React from 'react';
import '../Styles/Description.scss';

const Description = () => {
  return (
    <div className="company-details">
      <div className="header-logo">
        <img src="./Union.png" alt="logo" />
        <h1>Logo</h1>
      </div>
      <div className="bar-container">
        <p className="bar-text">Lorem ipsum dolor sit amet</p>
        <p className="text-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="scroll-container">
        <p className="scroll-text">scroll</p>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Description;
