// import { useState, useEffect } from 'react';
/* import { Navigate } from 'react-router-dom'; */
import { toast } from 'react-toastify';

import api from '../services/api';

export default function useAuth() {
  async function registe(user) {
    try {
      const response = await api.post('/user/register', (user));

      localStorage.setItem(response.token);
      return response;
    } catch (error) {
      const resp = await error.response?.data?.message;
      return toast.error(resp);
    }
  }

  return { registe };
}
