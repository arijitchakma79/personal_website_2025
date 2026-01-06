import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Resume, Projects, Hobbies } from './pages';
import { Sidebar, Footer } from './components'; // Import Footer
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
          </main>
          <Footer /> {/* Ensure Footer is outside .main-content */}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
