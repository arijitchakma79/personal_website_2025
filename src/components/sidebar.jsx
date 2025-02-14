import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText, Boxes,  Twitter, Instagram, Linkedin } from 'lucide-react';
import '../styles/sidebar.css'

const Sidebar = () => {
    const navLinks = [
        { path: '/', icon: <Home size={20} />, text: 'Home' },
        { path: '/resume', icon: <FileText size={20} />, text: 'Resume' },
        { path: '/projects', icon: <Boxes size={20} />, text: 'Projects' }
    ];

    const socialLinks = [
        { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
        { icon: <Instagram size={20} />, url: '#', label: 'Instagram' },
        { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn' }
    ];

    return (
        <nav className="sidebar">
            <div className="nav-links">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        {link.icon}
                        <span className="nav-text">{link.text}</span>
                    </NavLink>
                ))}
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
    );
};

export default Sidebar;