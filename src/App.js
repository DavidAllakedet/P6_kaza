import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Room from './pages/Logement/Logement'
import About from './pages/About/About'
import Error from './pages/Error/Error'


function App() {
  return (
    ReactDOM.render(
      <React.StrictMode>
        <Router>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/room" element={<Room />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
          
        </Router>
      </React.StrictMode>,
      document.getElementById('root')
    )
  );
}

export default App