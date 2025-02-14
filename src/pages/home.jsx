import React from 'react';
import '../styles/home.css';
import image1 from '../assets/snap1.png';
import image2 from '../assets/snap2.png';
import image3 from '../assets/snap3.png';
import image4 from '../assets/snap4.png';
import image5 from '../assets/snap5.png';
import image6 from '../assets/snap6.png';
import image7 from '../assets/snap7.png';
import image8 from '../assets/snap8.png';

const Home = () => {
    const snapshots = [
        { src: image1, alt: "HackPrinceton 2024" },
        { src: image2, alt: "Me" },
        { src: image3, alt: "HopHacks 2024" },
        { src: image4, alt: "Last day at BMS" },
        { src: image5, alt: "Drexel Statue during Winter" },
        { src: image6, alt: "Group photo with friends" },
        { src: image7, alt: "PennApps 2024 Project" },
        { src: image8, alt: "At Columbia 2024" }
    ];

    return (
        <div className="home">
            {/* Intro Section */}
            <section className="intro">
                <h1>Hi, I'm Ariji 👋</h1>
                <p className="subtitle">Software Engineer | ML Engineer / Researcher</p>
                    <div className="bio">
                            I am a third-year Computer Science student at <b>Drexel University</b> with a passion for 
                            building innovative software and hardware solutions that solve real-world challenges.  
                            I have experience in full-stack development, Artificial Intelligence, Large Language Models (LLMs), and Machine Learning, along with basic hands-on work in IoT systems.  
                            Currently, I am exploring Machine Learning and Computer Vision while considering graduate school.  

                            <br/><br/>In my free time, I enjoy working out, discovering new restaurants, and continuously expanding my knowledge.  
                            I also love attending hackathons and have participated in six so far at universities like Columbia, UPenn, JHU, and Princeton.  
                        <br/><br/>Currently, I am:
                        <ul>
                            <li><p>Actively seeking <b>SWE / ML / AI</b> positions for Spring/Summer <b>2026</b></p></li>
                            <li><p>Deepening my knowledge in Computer Vision and Machine Learning</p></li>
                        </ul>
                        <p>Feel free to reach out at <a href="mailto:ac4393@drexel.edu" className="email-link">ac4393@drexel.edu</a>!</p>
                    </div>
            </section>

            {/* Snapshots Section */}
            <section className="snapshots">
                <h2>SNAPSHOTS</h2>
                <div className="scroll-container">
                    <div className="image-grid">
                        {snapshots.concat(snapshots).map((snapshot, index) => ( // Duplicate images for infinite scroll
                            <img 
                                key={`img-${index}`}
                                src={snapshot.src}
                                alt={snapshot.alt}
                                className="snapshot-img"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
