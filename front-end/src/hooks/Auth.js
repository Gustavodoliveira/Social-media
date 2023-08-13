import { useState /* useEffect */ } from 'react';
/* import { Navigate } from 'react-router-dom'; */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../services/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  async function registe(user) {
    try {
      const response = await api.post('/user/register', (user));
      const { message, token } = response.data;
      toast.success(message);
      localStorage.setItem('token', JSON.stringify(token));
      setAuthenticated(true);
    } catch (error) {
      const resp = await error.response?.data?.message;
      toast.error(resp);
    }
  }

  return { registe };
}
