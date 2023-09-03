import React, { useState, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
/* import axios from '../../services/api'; */

import { Container } from './styleRegister';

import Header from '../../components/header/header';
import Input from '../../components/input/input';

import { Context } from '../../context/UserContext';

function Register() {
  const [user, setUser] = useState({});
  const [Preview, setPreview] = useState();
  const { registe } = useContext(Context);

  async function handleClick(e) {
    e.preventDefault(e);
    registe(user);
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function onFileChange(e) {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Header />

      <Container>
        <ToastContainer autoClose={3000} />
        <h1>Create your account</h1>
        <p>create your account and have fun with your friends</p>
        <form onSubmit={handleSubmit}>
          {(user.image || Preview) && (
            <img
              src={
                Preview
                  ? URL.createObjectURL(Preview)
                  : `http://localhost:5000/public/user/${user.image}`
              }
              alt={user.name}
            />

          )}
          <Input
            text="img"
            type="file"
            name="img"
            handleOnChange={onFileChange}
          />
          <Input
            type="text"
            name="name"
            placeHolder="type your name"
            handleOnChange={handleChange}
            value={user.name || ''}

          />
          <Input
            type="text"
            name="phone"
            placeHolder="type your phone"
            handleOnChange={handleChange}
            value={user.phone || ''}
          />
          <Input
            type="email"
            name="email"
            placeHolder="type your e-mail"
            handleOnChange={handleChange}
            value={user.email || ''}
          />
          <Input
            type="password"
            name="password"
            placeHolder="type your password"
            handleOnChange={handleChange}
            value={user.password || ''}
          />
          <Input
            type="password"
            name="confirmpassword"
            placeHolder="confirm your password"
            handleOnChange={handleChange}
            value={user.confirmpassword || ''}
          />
          <input type="submit" value="Register" onClick={handleClick} />

        </form>
      </Container>
    </>
  );
}

export default Register;
