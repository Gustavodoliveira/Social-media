import React, { useState, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
/* import axios from '../../services/api'; */

import { Container } from './styleRegister';

import Header from '../../components/header/header';
import Input from '../../components/input/input';

import { Context } from '../../context/UserContext';

function Register() {
  const [user, setUser] = useState({});
  const { registe } = useContext(Context);

  async function handleClick(e) {
    e.preventDefault(e);
    registe(user);
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
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
          <Input
            type="text"
            name="name"
            placeHolder="type your name"
            handleOnChange={handleChange}

          />
          <Input
            type="text"
            name="phone"
            placeHolder="type your phone"
            handleOnChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeHolder="type your e-mail"
            handleOnChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeHolder="type your password"
            handleOnChange={handleChange}
          />
          <Input
            type="password"
            name="confirmpassword"
            placeHolder="confirm your password"
            handleOnChange={handleChange}
          />
          <input type="submit" value="Register" onClick={handleClick} />

        </form>
      </Container>
    </>
  );
}

export default Register;
