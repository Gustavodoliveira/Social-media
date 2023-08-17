import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/UserContext';

import { Headers } from './styleheader';

function Header() {
  const { authenticated } = useContext(Context);
  return (
    <Headers>
      <header>
        <div>
          <h1>Social Media</h1>
        </div>
        <nav>
          <ul>
            {
              authenticated ? (
                <>
                  <li><Link to="/">Amigos</Link></li>
                  <li><Link to="/">Logado</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/">Login</Link></li>
                  <li><Link to="/">About</Link></li>
                </>
              )
            }

          </ul>
        </nav>
      </header>
    </Headers>
  );
}

export default Header;
