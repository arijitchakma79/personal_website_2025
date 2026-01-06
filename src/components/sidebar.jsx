import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText, Boxes, Palette, Instagram, Linkedin, Github, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import profileImg from '../assets/profile_pic.JPG';
import '../styles/sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { path: '/', icon: <Home size={20} />, text: 'Home' },
        { path: '/resume', icon: <FileText size={20} />, text: 'Resume' },
        { path: '/projects', icon: <Boxes size={20} />, text: 'Projects' },
        { path: '/hobbies', icon: <Palette size={20} />, text: 'Hobbies' }
    ];

    const socialLinks = [
        { icon: <Instagram size={20} />, url: 'https://www.instagram.com/80asfluffshi/', label: 'Instagram' },
        { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/arijitchakma/', label: 'LinkedIn' },
        { icon: <Github size={20} />, url: 'https://github.com/arijitchakma79/', label: 'Github' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="profile-image-container">
                    <img src={profileImg} alt="Profile" className="profile-image" />
                </div>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => 
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            {link.icon}
                            <span className="nav-text">{link.text}</span>
                        </NavLink>
                    ))}
                    <button 
                        className="nav-link theme-toggle-link" 
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        <span className="nav-text">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                    </button>
                </div>

                <div className="social-links">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Sidebar;