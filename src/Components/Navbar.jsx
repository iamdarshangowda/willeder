import React, { useState } from 'react';
import '../Styles/Navbar.scss';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./Union.png" alt="logo" />
        <h1>Logo</h1>
      </div>
      <ul className={menuActive ? 'menu-bar-open' : 'menu-bar-close'}>
        <li>Home</li>
        <li>Page 1</li>
        <li>Page 2</li>
      </ul>
      <div className="menu-bar" onClick={handleMenu}>
        {menuActive ? (
          <img src="./close.webp" about="menu close" />
        ) : (
          <img src="./menu.png" about="menu bar" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
