import React from 'react';
import { Globe, FileText, Users, ExternalLink } from 'lucide-react';
import '../styles/projects.css';
import deneyes from '../assets/deneyes.jpg';
import scout from '../assets/scout.jpg';
import skyhigh from '../assets/skyhigh.jpg';
import pigeonpost from '../assets/pigeonpost.png';
import visualed from '../assets/visualed.jpg';
import soundshield from '../assets/soundshield.jpg';
import thrifthub from '../assets/thrifthub.jpg'


const Projects = () => {
    const projects = [
        {
            title: "SkyHigh",
            description: "A IOT Frisbee equipped with multi agent AI systems capable to scan the critical areas during a search and rescue mission and provide helpful inspections regarding the area.",
            category: "Technical",
            image: skyhigh,
            icon: <Globe size={20} />,
            link: "https://devpost.com/software/skyhigh-hf13ec"
        },
        {
            title: "PigeonPost",
            description: "AI system that processes live lecture audio for instant knowledge retrieval, automatically generates diverse study content, and drives engagement through gamified learning metrics.",
            category: "Technical",
            image: pigeonpost,
            icon: <Globe size={20} />,
            link: "https://dorahacks.io/buidl/19412"
        },
        {
            title: "DenEyes",
            description: "Robot to detect early signs of ADHD using CV and Reinforcement Learning.",
            category: "Technical",
            image: deneyes,
            icon: <Globe  size={20} />,
            link: "https://devpost.com/software/deneyes"
        },
        {
            title: "SoundShield",
            description: "A smart headphone device that reduces unwanted noise while keeping important sounds like speech and warns users when someone is behind them.",
            category: "Technical",
            image: soundshield,
            icon: <Globe  size={20} />,
            link: "https://devpost.com/software/soundsheild"
        },
        {
            title: "Visual-ED",
            description: "AI-powered eye-tracking system that helps people with mobility disabilities communicate in educational settings by detecting their eye movements to answer questions and interact with their surroundings.",
            category: "Technical",
            image: visualed,
            icon: <Globe  size={20} />,
            link: "https://devpost.com/software/visual-ed"
        },
        {
            title: "Scout-Campus Security App",
            description: "Autonomous campus security robot that patrols autonomously, detects calls for help, and shares its location with security teams in real-time through a mobile app.",
            category: "Technical",
            image: scout,
            icon: <Globe  size={20} />,
            link: "https://devpost.com/software/scout-campus-security"
        },
        {
            title: "ThirftHub",
            description: "Personal finance tracker that visualizes users' income, expenses, and spending patterns through interactive charts and graphs to help monitor financial habits.",
            category: "Technical",
            image: thrifthub,
            icon: <Globe  size={20} />,
            link: "https://github.com/arijitchakma79/ThriftHub"
        }
    ];

    return (
        <div className="projects">
            <h1>PROJECTS</h1>
            <p className="projects-subtitle">
                This includes my personal and group projects 
            </p>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <a 
                        key={index} 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                    >
                        <div className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <div className="project-category">
                                    {project.icon}
                                    <span>{project.category}</span>
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-link">
                                    <ExternalLink size={16} />
                                    <span>View Project</span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;