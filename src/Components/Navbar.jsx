import React from 'react';
import '../Styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./Union.png" alt="logo" />
        <h1>Logo</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Page 1</li>
        <li>Page 2</li>
      </ul>
      <div className="menu-bar">
        <img src="./menu.png" about="menu bar" />
      </div>
    </nav>
  );
};

export default Navbar;
