import React from 'react';
import '../styles/home.css';
import image1 from '../assets/image1.png';

const Home = () => {
    const snapshots = [
        {
            src: image1,
            alt: "Scene in city"
        },
        {
            src: image1,
            alt: "Winter scene"
        },
        {
            src: image1,
            alt: "Group gathering"
        },
        {
            src: image1,
            alt: "Studio session"
        },
        {
            src: image1,
            alt: "Group photo"
        }
    ];

    return (
        <div className="home">
            {/* Intro Section */}
            <section className="intro">
                <h1>Hi, I'm Ariji 👋</h1>
                <p className="subtitle">Software Engineer | ML Engineer / Researcher</p>
                
                <div className="bio">
                    I am a third-year Computer Science student at Drexel University with a passion for building software and hardware projects that solve real-world problems. 
                    I am proficient in full-stack development and have experience working on IoT systems.  
                    Currently, I am exploring Machine Learning and Computer Vision concepts while considering graduate school.  
                    <br/><br/>In my free time, I enjoy going to the gym, trying out new restaurants, and constantly learning new things.  
                    I am also passionate about hackathons and have participated in six so far.  
                    <br/><br/>Feel free to reach out to me at <b>ac4393@drexel.edu</b> if you'd like to connect!
                </div>

            </section>

            {/* Snapshots Section */}
            <section className="snapshots">
                <h2>SNAPSHOTS</h2>
                <div className="image-grid">
                    {/* Original set of images */}
                    <div className="image-grid-inner">
                        {snapshots.map((snapshot, index) => (
                            <img 
                                key={`img-${index}`}
                                src={snapshot.src}
                                alt={snapshot.alt}
                                className="snapshot-img"
                            />
                        ))}
                    </div>
                    {/* Duplicated set for seamless loop */}
                    <div className="image-grid-inner">
                        {snapshots.map((snapshot, index) => (
                            <img 
                                key={`img-dup-${index}`}
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