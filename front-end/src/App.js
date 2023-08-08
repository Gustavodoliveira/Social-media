import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';

import Store from './store';
import Register from './pages/Register/Register';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
