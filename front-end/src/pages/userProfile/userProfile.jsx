import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/header/header';

function UserProfile() {
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
      <div>userProfile</div>
    </>
  );
}

export default UserProfile;
