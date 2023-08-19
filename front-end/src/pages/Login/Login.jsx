import React, { useState, useContext } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from '../../components/header/header';
import Input from '../../components/input/input';
import { Container } from '../Register/styleRegister';

import { Context } from '../../context/UserContext';

function Login() {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick(e) {
    e.preventDefault();
    login(user);
  }

  return (
    <>
      <Header />
      <Container>
        <ToastContainer autoClose={3000} />
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <Input
            type="e-mail"
            name="email"
            placeHolder="type your email"
            handleOnChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeHolder="type your password"
            handleOnChange={handleChange}
          />
          <input type="submit" value="Login" onClick={handleClick} />
        </form>
      </Container>
    </>

  );
}

export default Login;
