import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Resume, Projects } from './pages';
import { Sidebar, Footer } from './components'; // Import Footer
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer /> {/* Ensure Footer is outside .main-content */}
      </div>
    </Router>
  );
};

export default App;
