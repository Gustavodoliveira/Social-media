import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import { UserProvider } from './context/UserContext';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';

function App() {
  return (

    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserProvider>
    </Router>

  );
}
export default App;
