import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ariji. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:ac4393@drexel.edu">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
