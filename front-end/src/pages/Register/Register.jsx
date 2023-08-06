import React, { useState } from 'react';

import { Container } from './styleRegister';

import Header from '../../components/header/header';
import Input from '../../components/input/input';

function Register() {
  const { user, setUser } = useState({});

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
        <h1>Create your account</h1>
        <p>create your account and have fun with your friends</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="nome"
            placeHolder="type your name"
            onChange={handleChange}

          />
          <Input
            type="text"
            name="phone"
            placeHolder="type your phone"
            onChange={handleChange}
          />
          <Input
            type="email"
            name="E-mail"
            placeHolder="type your e-mail"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeHolder="type your password"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmpassword"
            placeHolder="confirm your password"
            onChange={handleChange}
          />
          <input type="submit" value="Register" />

        </form>
      </Container>
    </>
  );
}

export default Register;
