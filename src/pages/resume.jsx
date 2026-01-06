import React from 'react';
import { GraduationCap, Briefcase, Award, FileText } from 'lucide-react';
import '../styles/resume.css';
import logo from "../assets/drexel_logo.png"
import drexelCciResearchLogo from "../assets/drexel_cci_research_logo.jpg"
import assapLogo from "../assets/assap.jpg"
import bmsLogo from "../assets/BMS.png"
import developForGoodLogo from "../assets/develop_for_good_logo.jpg"
import drexelCCILogo from "../assets/drexel_cci.jpg"
import kbraLogo from '../assets/kbra.jpg'

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="resume">
            <div className="resume-header">
                <h1>RESUME</h1>
                <a 
                    href="https://drive.google.com/drive/folders/1y-MUB9luMH3jtbl1PI1W__xDFSkVz_eA?usp=sharing"
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
                    <img src={logo} alt="Drexel" className="company-logo-small" />
                </div>
            </section>
            
            {/* Education Section */}
            <section className="resume-section">
                <h2>Publications</h2>
                <div className="item">
                    <FileText className="icon" size={20} />
                    <div className="content">
                        <h3>DrawSim-PD: Generating NGSS-Aligned Student-Like Drawings for Teacher Diagnostic Training</h3>
                        <p className="subtitle">Arijit Chakma, Peng He, Tingting Li, Tiffany D. Do, and Feng Liu. Under review.</p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="resume-section">
                <h2>Experiences</h2>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>Incoming Software Engineer Intern</h3>
                        <p className="subtitle">KBRA, Apr 2026 -  September 2026</p>
                    </div>
                    <img src={kbraLogo} alt="KBRA" className="company-logo-small" />
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>Undergradudate Researcher</h3>
                        <p className="subtitle">
                            <a href="https://vilab-group.com/" target="_blank" rel="noopener noreferrer" className="resume-link">
                                Visual Intelligence Lab
                            </a>, Apr 2025 -  Present
                        </p>
                    </div>
                    <img src={drexelCciResearchLogo} alt="Drexel CCI Research" className="company-logo-small" />
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>Course Assistant</h3>
                        <p className="subtitle">Drexel University College of Computing & Informatics, Sep 2025 -  Present</p>
                    </div>
                    <img src={drexelCCILogo} alt="Drexel CCI" className="company-logo-small" />
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>AI Engineer Sprintern</h3>
                        <p className="subtitle">ASAPP, August 2025 - November 2025</p>
                    </div>
                    <img src={assapLogo} alt="ASAPP" className="company-logo-small" />
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>Software Engineer Intern</h3>
                        <p className="subtitle">Bristol Myers Squibb, Apr 2024 - Sep 2024</p>
                    </div>
                    <img src={bmsLogo} alt="Bristol Myers Squibb" className="company-logo" />
                </div>
                <div className="item">
                    <Briefcase className="icon" size={20} />
                    <div className="content">
                        <h3>Software Engineer</h3>
                        <p className="subtitle">Develop For Good, May 2024 - Aug 2024</p>
                    </div>
                    <img src={developForGoodLogo} alt="Develop For Good" className="company-logo-small" />
                </div>
            </section>

        
            {/* Awards Section */}
            <section className="resume-section">
                <h2>Awards & Honors</h2>
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
        </div>
    );
};

export default Resume;