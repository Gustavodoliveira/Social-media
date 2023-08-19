import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaUser, FaUserLock } from 'react-icons/fa';

import { Context } from '../../context/UserContext';

import { Headers } from './styleheader';

function Header() {
  const { authenticated, logout } = useContext(Context);
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
                  <li><Link to="/"><FaUserFriends /></Link></li>
                  <li><Link to="/"><FaUser /></Link></li>
                  <li role="presentation" onClick={logout}><Link to="/"><FaUserLock /></Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/">Register</Link></li>
                  <li><Link to="/login">Login</Link></li>
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
