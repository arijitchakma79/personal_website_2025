import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ariji. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/arijitchakma79/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/arijitchakma/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://x.com/arigon79" target="_blank" rel="noopener noreferrer">X</a>
        <a href="mailto:ac4393@drexel.edu">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
