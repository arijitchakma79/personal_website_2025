import React from 'react';
import Typewriter from '../components/Typewriter';
import '../styles/home.css';

const Home = () => {
    const typewriterPhrases = [
        "I am a Researcher",
        "I am a Software engineer",
        "I like reading about history"
    ];

    return (
        <div className="home">
            {/* Intro Section */}
            <section className="intro">
                <h1 className="intro-name">Hi, I am Ariji</h1>
                <h3 className="intro-typewriter">
                    <Typewriter
                        phrases={typewriterPhrases}
                        typingSpeed={100}
                        deletingSpeed={50}
                        pauseTime={2000}
                    />
                </h3>

                <div className="bio">
                    <p>
                        I’m a junior Computer Science student at Drexel University with research interests in 
                        3D Computer Vision, Controllable Image Generation, Applied LLMs, and 
                        Human–AI Interaction (HAI). I’m a long-time developer with experience across the Full Stack, as well as in 
                        IoT (Arduino & Raspberry Pi), agentic workflows, and Model Context Protocols (MCPs). 
                        I enjoy building systems end-to-end, from low-level hardware integrations to high-level intelligent agents.
                    </p>

                    <p>
                        Outside of academics, I enjoy working out, exploring new restaurants, and learning across a wide 
                        range of topics, including medieval European history, geopolitics, game theory, and psychology. 
                        I’m also an avid hackathon participant, having competed in approximately 15 events, 
                        including hackathons at MIT, Columbia, UPenn, Johns Hopkins, and Princeton.
                    </p>

                    <p>Currently, I am:</p>
                    <ul>
                        <li>
                            Taking winter courses, including Computational Photography and 
                            Augmented Programming.
                        </li>
                        <li>
                            Working on a research project in controllable image generation.
                        </li>
                        <li>
                            Developing a Linear Programming Simplex Algorithm visualizer.
                        </li>
                        <li>
                            Learning Mandarin.
                        </li>
                    </ul>

                    <p className="email-paragraph">
                        Feel free to reach out at{" "}
                        <a href="mailto:ac4393@drexel.edu" className="email-link">
                            ac4393@drexel.edu
                        </a>.
                    </p>
                </div>

            </section>
        </div>
    );
};

export default Home;
