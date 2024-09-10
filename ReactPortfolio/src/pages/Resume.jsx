import "./styles/Resume.css";
import resume from '../../src/assets/images/resume.jpg';

export default function Resume() {
    const triggerDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Resume.jpg'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resumeBody">
            <div className="section">
                <h3>Summary</h3>
                <div className="summary-text">
                    <hr />
                    <p>I am a student at Austin Community College and an aspiring developer with three years of coding experience. While much of my time has been dedicated to building a strong academic foundation, I have recently begun applying my knowledge in practical, real-world settings. My primary focus is on web development using the MERN stack, where I build full-stack applications from scratch, including server-level components.</p>
                </div>
            </div>
            <div className="section">
                <h3>Education</h3>
                <hr />
                <div className="education">
                    <div className="card acc">
                        <p className="education-title ">Bachelor's of Applied Science in Software Development</p>
                        <hr />
                        <p className="education-place-date">Austin Community College ~ 2023 - Current</p>
                    </div>
                    <div className="card ut">
                        <p className="education-title">University of Texas at Austin Full-Stack Coding Bootcamp</p>
                        <hr />
                        <p className="education-place-date">University of Texas ~ 2024</p>
                    </div>
                    <div className="card acc">
                        <p className="education-title">Associates of Science in Computer Science</p>
                        <hr />
                        <p className="education-place-date">Austin Community College ~ 2023</p>
                    </div>
                    <div className="card dvhs">
                        <p className="education-title">High School Diploma</p>
                        <hr />
                        <p className="education-place-date">Del Valle High School ~ 2019</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <h3>Certifications</h3>
                <hr />
                <div className="certifications">
                    <div className="card acc">
                        <p className="education-title">Occupational Skills Award in Computer Programming</p>
                        <hr />
                        <p className="education-place-date">Austin Community College ~ 2023</p>
                    </div>
                    <div className="card ut">
                        <p className="education-title">UT at Austin Coding Bootcamp Certificate of Completion</p>
                        <hr />
                        <p className="education-place-date">University of Texas ~ 2024</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <h3>Skills</h3>
                <hr />
                <div className="skills">
                    <div className="hardSkill">
                        <ul>
                            <li className="item">Critical Thinking</li>
                            <li className="item">Attention To Detail</li>
                            <li className="item">Ambitious</li>
                        </ul>
                    </div>
                    <div className="softSkill">
                        <ul>
                            <li className="item">HTML5</li>
                            <li className="item">CSS3</li>
                            <li className="item">JavaScript</li>
                            <li className="item">MongoDB</li>
                            <li className="item">Mongoose</li>
                            <li className="item">PostgreSQL</li>
                            <li className="item">MySQL</li>
                            <li className="item">React.js</li>
                            <li className="item">C++</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="buttonDiv">
                <button onClick={triggerDownload} className="btn specbtn">Download Resume ⬇️</button>
            </div>
        </div>
    );
}