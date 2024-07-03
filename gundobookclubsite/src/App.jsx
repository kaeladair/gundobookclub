// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Events from './components/Events';
import './global.css';

const App = () => {
  return (
    <Router>
      <div>
        <header className="fullscreen-header">
          <p className="title">Gundo Book Club</p>
          <nav className="menu">
            <Link to="/events">Upcoming Events</Link>
            <Link to="/about">About</Link>
            <Link to="/twitter">Twitter</Link>
          </nav>
        </header>
        <Routes>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
