import React from 'react';
import '../styles/home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Intro Section */}
            <section className="intro">
                <h1>Hi, I'm Ariji</h1>
                <p className="subtitle">Software Engineer | AI Engineer & Researcher</p>

                <div className="bio">
                    <p>
                        I'm a Junior Computer Science student at Drexel University, focusing on 
                        <b> Software Engineering, Deep Learning, Computer Vision, and Multimodal LLMs</b>.  
                        I’m passionate about designing scalable AI systems and applying cutting-edge research 
                        to solve real-world problems. My experience spans full-stack development, LLMs, MCP workflows, 
                        vision-based deep learning models, and diffusion models.
                    </p>

                    <p>
                        Outside of academics, I enjoy working out, discovering new restaurants, and 
                        continuously expanding my knowledge. I also love hackathons — I’ve participated in 
                        around <b>11</b> so far, including events at MIT, Columbia, UPenn, JHU, and Princeton.
                    </p>

                    <p>Currently, I am:</p>
                    <ul>
                        <li>
                            Actively seeking <b>SWE / ML / AI</b> positions for Spring/Summer <b>2026</b>.
                        </li>
                        <li>
                            Taking Fall 2025 courses, including <b>Computer Graphics</b> and 
                            <b> Optimization Theory</b>.
                        </li>
                        <li>
                            Working on a research project that uses LLMs for planning and 
                            diffusion models for generating scientific diagrams.
                        </li>
                    </ul>

                    <p>
                        Feel free to reach out at{" "}
                        <a href="mailto:ac4393@drexel.edu" className="email-link">
                            ac4393@drexel.edu
                        </a>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
