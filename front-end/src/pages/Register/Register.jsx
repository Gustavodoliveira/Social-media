import React, { useState } from 'react';
/* import { useDispatch } from 'react-redux'; */

import { Container } from './styleRegister';

import Header from '../../components/header/header';
import Input from '../../components/input/input';

/* import * as action from '../../store/modules/auth/actions'; */

function Register() {
  /*  const Dispatch = useDispatch(); */
  const [user, setUser] = useState({});

  /*  function handleClick(e) {
    e.preventDefault(e);
    Dispatch(action.UserRegisterRequest());
    console.log(user);
  } */

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
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
            name="E-mail"
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
          <input type="submit" value="Register" />

        </form>
      </Container>
    </>
  );
}

export default Register;
