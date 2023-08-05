/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaAppStore } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <FaAppStore />
      <h1>Social Media</h1>
      <nav>
        <ul>
          <Link to="/">Login</Link>
          <Link to="/">About</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
