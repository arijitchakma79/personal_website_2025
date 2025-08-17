import React from 'react';
import '../styles/home.css';

const Home = () => {


    return (
        <div className="home">
            {/* Intro Section */}
            <section className="intro">
                <h1>Hi, I'm Ariji 👋</h1>
                <p className="subtitle">Software Engineer | AI Engineer / Researcher</p>
                    <div className="bio">
                            I am a junior Computer Science student at <b>Drexel University</b> with a passion for 
                            building innovative software and hardware solutions that solve real-world challenges.  
                            I have experience in full-stack development, Artificial Intelligence, Computer Vision (CV), Difussion Models, Large Language Models (LLMs), and Machine Learning, along with basic hands-on work in IoT systems.  
                            Currently, I am exploring Machine Learning and Computer Vision while considering graduate school.  

                            <br/><br/>In my free time, I enjoy working out, discovering new restaurants, and continuously expanding my knowledge.  
                            I also love attending hackathons and have participated in 9 so far at universities like Columbia, UPenn, JHU, and Princeton.  
                        <br/><br/>Currently, I am:
                        <ul>
                            <li><p>Actively seeking <b>SWE / ML / AI</b> positions for Spring/Summer <b>2026</b>.</p></li>
                            <li><p>Working on publishing a first author AI paper at Visual Intelligence Lab, Drexel CCI under Dr.Feng Liu.</p></li>
                            <li><p>Deepening my knowledge in Computer Vision and Machine Learning.</p></li>
                        </ul>
                        <p>Feel free to reach out at <a href="mailto:ac4393@drexel.edu" className="email-link">ac4393@drexel.edu</a>!</p>
                    </div>
            </section>
        </div>
    );
};

export default Home;
