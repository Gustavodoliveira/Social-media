/* eslint-disable no-underscore-dangle */
import React, { useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUserDelete } from 'react-icons/ai';
import api from '../../services/api';

import { Context } from '../../context/UserContext';

import Header from '../../components/header/header';
import Input from '../../components/input/input';
import { ProfileContainer } from './styleUserProfile';

function UserProfile() {
  const { Userdelete } = useContext(Context);
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');
  const Navigate = useNavigate();

  useEffect(() => {
    api.get('/user/profile', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    }).then((resp) => {
      setUser(resp.data.user);
    });
  }, [token]);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleClick(e) {
    e.preventDefault();

    await api.patch(`/user/edit/${user._id}`, (user), {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((resp) => {
        const { message } = resp.data;
        Navigate('/home');
        toast.success(message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function DeleteUser() {
    Userdelete(user);
  }
  return (
    <>
      <Header />
      <ProfileContainer>
        <ToastContainer autoClose={3000} />
        <h1>Edit your account</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeHolder="type your name"
            handleOnChange={handleChange}
            value={user.name}
          />
          <Input
            type="text"
            name="phone"
            placeHolder="type your phone"
            handleOnChange={handleChange}
            value={user.phone}
          />
          <Input
            type="email"
            name="email"
            placeHolder="type your e-mail"
            handleOnChange={handleChange}
            value={user.email}
          />
          <Input
            type="password"
            name="password"
            placeHolder="type your password"
            handleOnChange={handleChange}
            value={user.password}
          />
          <Input
            type="password"
            name="confirmpassword"
            placeHolder="confirm your password"
            handleOnChange={handleChange}
            value={user.confirmpassword}
          />
          <input type="submit" value="Edit user" onClick={handleClick} />
          <h3>
            Delete user:

            <span><AiOutlineUserDelete onClick={DeleteUser} /></span>
          </h3>
        </form>

      </ProfileContainer>
    </>
  );
}

export default UserProfile;
