import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Register from './pages/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
