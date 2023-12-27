import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import About from './pages/About/About';
import Error from './pages/Error/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

root.render(<App />); // Use root.render() for the initial render

export default App;
