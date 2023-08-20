import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import { UserProvider } from './context/UserContext';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Footer from './components/footer/Footer';

import { GlobalBodyStyled } from './globalStyle';

function App() {
  return (

    <Router>
      <UserProvider>
        <GlobalBodyStyled>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </GlobalBodyStyled>
      </UserProvider>
    </Router>

  );
}
export default App;
