import React from 'react';
import { GraduationCap, Briefcase, Award, FileText } from 'lucide-react';
import '../styles/resume.css';
import logo from "../assets/drexel_logo.png"
import resumePDF from "../assets/resume.pdf"


const Resume = () => {
    return (
        <div className="resume">
            <div className="resume-header">
                <h1>RESUME</h1>
                <a 
                    href={resumePDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-button"
                >
                    <FileText size={20} />
                    <span>View Full Resume</span>
                </a>
            </div>

            <p className="subtitle">Looking for SWE Intern/Co-op positions for Summer 26</p>

            {/* Education Section */}
            <section className="resume-section">
                <h2>Education</h2>
                <div className="item">
                    <GraduationCap className="icon" size={20} />
                    <div className="content">
                        <h3>Bachelors in Computer Science</h3>
                        <p className="subtitle">Drexel University, 2027</p>
                    </div>
                    <img src={logo} alt="Drexel" className="company-logo" />
                </div>
            </section>

            

            {/* Experience Section */}
            <section className="resume-section">
                <h2>Experiences</h2>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>AI Engineer Sprintership</h3>
                        <p className="subtitle">ASAPP, August 2025 -  Present</p>
                    </div>
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>AI/ML Fellow</h3>
                        <p className="subtitle">Cornell Tech (Break Through Tech AI Program), April 2025 -  Present</p>
                    </div>
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>AI Researcher</h3>
                        <p className="subtitle">Drexel University College of Computing & Informatics, April 2025 -  Present</p>
                    </div>
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>UG Researcher</h3>
                        <p className="subtitle">Drexel University College of Engineering, Sep 2024 - Mar 2025</p>
                    </div>
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>Cloud and Software Engineer</h3>
                        <p className="subtitle">Bristol Myers Squibb, Apr 2024 - Sep 2024</p>
                    </div>
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>Software Engineer</h3>
                        <p className="subtitle">Develop For Good, May 2024 - Aug 2024</p>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="resume-section">
                <h2>Leadership</h2>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>Event Coordinator</h3>
                        <p className="subtitle">Drexel Society of Artificial Intelligance, May 2023 - Apr 2024</p>
                    </div>
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>Operational Strategist</h3>
                        <p className="subtitle">IndeSearch, May 2022 - June 2023</p>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="resume-section">
                <h2>Awards & Achievements</h2>
                <div className="item">
                    <Award className="icon" size={20} />
                    <div className="content">
                        <h3>Best Social Impact Hack</h3>
                        <p className="subtitle">DragonHacks 2025 @ (Drexel University)</p>
                    </div>
                </div>
                <div className="item">
                    <Award className="icon" size={20} />
                    <div className="content">
                        <h3>Best Beginner Quantum Computing Track</h3>
                        <p className="subtitle">Bitcamps 2025 @ (University of Maryland, College Park)</p>
                    </div>
                </div>
                <div className="item">
                    <Award className="icon" size={20} />
                    <div className="content">
                        <h3>Best Overall First</h3>
                        <p className="subtitle">PennApps 2024 @ (University of Pennsylvania)</p>
                    </div>
                </div>
                <div className="item">
                    <Award className="icon" size={20} />
                    <div className="content">
                        <h3>General Prize Overall Second</h3>
                        <p className="subtitle">HopHacks 2024 @ (John Hopkins University)</p>
                    </div>
                </div>
                <div className="item">
                    <Award className="icon" size={20} />
                    <div className="content">
                        <h3>Bloomberg Philanthropic Hack - 3rd Prize</h3>
                        <p className="subtitle">HopHacks 2024 @ (John Hopkins University)</p>
                    </div>
                </div>
                <div className="item">
                    <Award className="icon" size={20} />
                    <div className="content">
                        <h3>Best Beginner Project</h3>
                        <p className="subtitle">DevFest 2025 @ (Columbia Univeristy)</p>
                    </div>
                </div>
                <div className="item">
                    <Award className="icon" size={20} />
                    <div className="content">
                        <h3>Best Interactive and Multimedia Track Winner</h3>
                        <p className="subtitle">DragonHacks 2024 @ (Drexel Univeristy)</p>
                    </div>
                </div>
                <div className="item">
                    <Award className="icon" size={20} />
                    <div className="content">
                        <h3>Deans List</h3>
                        <p className="subtitle">Awarded for GPA over 3.70 (All Quarters)</p>
                    </div>
                </div>
                <div className="item">
                    <Award className="icon" size={20} />
                    <div className="content">
                        <h3>Drexel Global Scholarship</h3>
                        <p className="subtitle">1 out of 13 international students who were awarded this prestigious scholarship in 2022</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;