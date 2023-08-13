import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import { UserProvider } from './context/UserContext';
import Register from './pages/Register/Register';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
export default App;
