import React from 'react';
import { Globe, FileText, Users } from 'lucide-react';
import '../styles/projects.css';

const Projects = () => {
    const projects = [
        {
            title: "SF Purity Test",
            description: "The official Purity Test checklist for the techies of San Francisco.",
            category: "WEBSITE",
            image: "/sf-purity.png",
            icon: <Globe size={20} />
        },
        {
            title: "Weight Streaming Paper",
            description: "Notes by Sarah Cheng | Reference Paper Supplementary slides",
            category: "TECHNICAL NOTES",
            image: "/weight-streaming.png",
            icon: <FileText size={20} />
        },
        {
            title: "Cafe Compute",
            description: "A community space for developers and tech enthusiasts",
            category: "COMMUNITY",
            image: "/cafe-compute.png",
            icon: <Users size={20} />
        }
    ];

    return (
        <div className="projects">
            <h1>PROJECTS</h1>
            <p className="projects-subtitle">
                tracking my learning and growth through notes, tutorials, and writing
            </p>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;