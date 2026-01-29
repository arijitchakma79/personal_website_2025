import React from 'react';
import About from '../components/about';
import Resume from '../components/resume';
import Projects from '../components/project';

const Home = () => {
  return (
    <div>
      <section id="about-section">
        <About />
      </section>
      <section id="resume-section">
        <Resume />
      </section>
      <section id="projects-section">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
