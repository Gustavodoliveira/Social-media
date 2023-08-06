import React from 'react';
import { Link } from 'react-router-dom';

import { Headers } from './styleheader';

function Header() {
  return (
    <Headers>
      <header>
        <div>
          <h1>Social Media</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
        </nav>
      </header>
    </Headers>
  );
}

export default Header;
