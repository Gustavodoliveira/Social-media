import React, { useContext, useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../../components/header/header';
import api from '../../services/api';

import Input from '../../components/input/input';

import { HomeContainer } from './styleHome';

function Home() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get('/user/profile', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    }).then((resp) => {
      setUser(resp.data.user);
    });
  }, [token]);

  return (
    <>
      <Header />
      <HomeContainer>
        <section className="sidebar-myUser-container">
          <div className="sidebar-myUser-infos user-img">
            <h3><FaUserCircle /></h3>
          </div>
          <div className="sidebar-myUser-infos">
            <h3>{user.name}</h3>
          </div>
          <div className="sidebar-myUser-infos">
            <h3>{user.email}</h3>
          </div>
          <div className="sidebar-myUser-infos">
            <h3>{user.phone}</h3>
          </div>
        </section>
        <section className="Post">
          <form className="form-container">
            <div>
              <input type="text" name="title" />
            </div>
            <div>
              <textarea name="content" placeholder="Type your Post" />
            </div>
            <input type="submit" />
          </form>
        </section>
      </HomeContainer>
    </>
  );
}

export default Home;
