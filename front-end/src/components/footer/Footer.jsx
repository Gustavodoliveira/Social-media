import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { FooterContainer } from './styledFooter';

function Footer() {
  return (
    <FooterContainer>
      <footer>
        <ul>
          <li>
            <Link to="/">
              <FaGithub />
              <span className="mySocial-media">GitHub</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedin />
              <span className="mySocial-media">Linkedin</span>
            </Link>
          </li>
        </ul>
        <h3>
          Developed by
          <span>Gustavo de oliveira</span>
        </h3>
      </footer>
    </FooterContainer>
  );
}

export default Footer;
