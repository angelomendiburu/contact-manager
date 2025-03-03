import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Contact Manager</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;