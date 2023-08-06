import React from 'react';

import { Container } from './styleRegister';

import Header from '../../components/header/header';
import Input from '../../components/input/input';

function Register() {
  return (
    <>
      <Header />
      <Container>
        <h1>Create your account</h1>
        <p>create your account and have fun with your friends</p>
        <form>
          <Input
            type="text"
            name="nome"
            placeHolder="type your name"

          />
          <Input
            type="text"
            name="phone"
            placeHolder="type your phone"

          />
          <Input
            type="email"
            name="E-mail"
            placeHolder="type your e-mail"

          />
          <Input
            type="password"
            name="password"
            placeHolder="type your password"

          />
          <Input
            type="password"
            name="confirmpassword"
            placeHolder="confirm your password"

          />
          <input type="submit" value="Register" />

        </form>
      </Container>
    </>
  );
}

export default Register;
