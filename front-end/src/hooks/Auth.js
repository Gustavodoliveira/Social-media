/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../services/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
      Navigate('/home');
    } else {
      Navigate('/');
    }
  }, []);

  async function registe(user) {
    try {
      const response = await api.post('/user/register', (user));
      const { message, token } = response.data;
      toast.success(message);
      localStorage.setItem('token', JSON.stringify(token));
      setAuthenticated(true);
      Navigate('/home');
    } catch (error) {
      const resp = await error.response?.data?.message;
      toast.error(resp);
    }
  }

  async function login(user) {
    try {
      const response = await api.post('/user/login', (user));
      const { message, token } = response.data;
      toast.success('Login realized');
      localStorage.setItem('token', JSON.stringify(token));
      setAuthenticated(true);
      Navigate('/home');
    } catch (error) {
      const resp = await error.response?.data?.message;
      toast.error(resp);
    }
  }

  function logout() {
    toast.success('Logout realized');
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    Navigate('/');
  }

  async function Userdelete(user) {
    const token = localStorage.getItem('token');
    await api.delete(`/user/delete/${user._id}`, (user), {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((resp) => {
        toast.success(resp.data.message);
        setAuthenticated(false);
        localStorage.removeItem('token');
        Navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return {
    authenticated, registe, logout, login, Userdelete,
  };
}
