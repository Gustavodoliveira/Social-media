/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/header/header';
import Input from '../../components/input/input';
import { Container } from '../Register/styleRegister';

function UserProfile() {
  const [user, setUser] = useState({});
  const [Preview, setPreview] = useState('');
  const token = localStorage.getItem('token');
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

  function onFileChange(e) {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  }

  async function handleClick(e) {
    e.preventDefault();

    const formData = new FormData();

    const userFormData = await Object.keys(user).forEach((key) => formData.append(key, user[key]));

    formData.append('user', userFormData);

    await api.patch(`/user/edit/${user._id}`, (formData), {
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
  return (
    <>
      <Header />
      <div>userProfile</div>
      {(user.image || Preview) && (
        <img
          src={
            Preview
              ? URL.createObjectURL(Preview)
              : `${user.img}`
          }
          alt={user.name}
        />

      )}
      <Container>
        <ToastContainer autoClose={3000} />
        <h1>Edit your account</h1>
        <form onSubmit={handleSubmit}>
          <Input
            text="imagem"
            type="file"
            name="image"
            handleOnChange={onFileChange}
          />
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
          <input type="submit" value="Register" onClick={handleClick} />

        </form>
      </Container>
    </>
  );
}

export default UserProfile;
