import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import axios from '../../services/api';

import { Container } from './styleRegister';

import Header from '../../components/header/header';
import Input from '../../components/input/input';

import * as action from '../../store/modules/auth/actions';

function Register() {
  const Dispatch = useDispatch();
  const [user, setUser] = useState({});

  async function handleClick(e) {
    e.preventDefault(e);

    try {
      const responses = await axios.post('/user/register', (user));
      toast.success(responses.data.message);
      localStorage.setItem(responses.token);
      Dispatch(action.UserRegisterRequest());
    } catch (error) {
      if (error) {
        const resp = await error.response?.data?.message;
        toast.error(resp);
      }
    }
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
      <ToastContainer autoClose={3000} />
      <Container>
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
