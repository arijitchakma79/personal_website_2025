import React from 'react';
import Typewriter from './Typewriter';
import '../styles/home.css';

const About = () => {
  const typewriterPhrases = [
    'I am a Researcher 🔬',
    'I am a Software Engineer 💻',
  ];

  return (
    <div className="home">
      {/* Intro Section */}
      <section className="intro">
        <h1 className="intro-name">Hi 👋, I am Ariji</h1>
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
            I’m a junior computer science student at Drexel University 🐉. My research focuses on 2D/3D/4D generation, applied LLMs, and human–computer interaction (HCI), under Professor <a href="https://liufeng2915.github.io/" target="_blank" rel="noopener noreferrer" className="email-link">Feng Liu</a>.
            I’m also a long-time developer with experience in full-stack and AI-powered applications, plus IoT and AR/VR.
          </p>
          <p>
            I previously interned at Bristol Myers Squibb as a software developer and will be interning at KBRA as a software engineer in Spring/Summer 2026.
          </p>
          <p>
            I love hackathons and have attended around 15 at Stanford, MIT, UPenn, Columbia, Hopkins, and more.
          </p>
          <p className="email-paragraph">
            Feel free to reach out to me via any of the links.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

