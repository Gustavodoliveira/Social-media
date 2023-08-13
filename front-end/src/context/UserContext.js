/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
import { createContext } from 'react';

import PropTypes from 'prop-types';
import useAuth from '../hooks/Auth';

const Context = createContext();

function UserProvider({ children }) {
  const { registe } = useAuth();

  return (
    <Context.Provider value={{ registe }}>
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };

UserProvider.propTypes = {
  children: PropTypes.oneOfType.isRequired,
};
