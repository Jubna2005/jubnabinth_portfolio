import "../styles/pages.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function About() {

  const detailsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("personal");

  const scrollToDetails = () => {
    detailsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="page">

      {/* TOP SECTION */}
      <h1 className="about-title">About Me</h1>

      <div className="about-card">
        <ul className="about-points">
  <li>
    Third-year B.Tech CSE student with a strong interest in technology and software development.
  </li>

  <li>
    Passionate about data analytics and exploring how data can be used for real-world insights.
  </li>

  <li>
    Actively learning web development using modern tools like React, JavaScript, and CSS.
  </li>

  <li>
    Continuously improving technical skills while staying updated with current industry trends.
  </li>

  <li>
    Interested in building practical, user-friendly solutions to solve real-world problems.
  </li>

  <li>
  Strong interest in continuously learning new technologies and improving problem-solving skills.
</li>

<li>
  Eager to contribute to meaningful projects and gain real-world experience in the tech field.
</li>
</ul>

        <button className="more-btn" onClick={scrollToDetails}>
          More Details ↓
        </button>
      </div>



      {/* DETAILS SECTION */}
      <div ref={detailsRef} className="details-section">

        {/* LEFT SIDE BUTTONS */}
        <div className="tabs">
          <button onClick={() => setActiveTab("personal")}>Personal Info</button>
          <button onClick={() => setActiveTab("education")}>Education</button>
          <button onClick={() => setActiveTab("skills")}>Skills</button>
          <button onClick={() => setActiveTab("experience")}>Experience</button>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="tab-content">

          {activeTab === "personal" && (
            <div>
  <h3>Personal Info</h3>

  <div className="info-row">
    <span>Name</span>
    <span>Jubna Binth Hydrose</span>
  </div>

  <div className="info-row">
    <span>Email</span>
    <span>jubnabinthhydrose@gmail.com</span>
  </div>

  <div className="info-row">
    <span>Location</span>
    <span>Kochi, Kerala, India</span>
  </div>

  <div className="info-row">
    <span>Role</span>
    <span>B.Tech CSE Student</span>
  </div>



</div>
          )}

          {activeTab === "education" && (
  <div>
    <h3>Education</h3>

    <p>
      <strong>B.Tech Computer Science Engineering</strong>
    </p>
    <p>KMEA Engineering College</p>
    <p>2024 – Present</p>

    <br />

    <p>
      <strong>Higher Secondary </strong>
    </p>
    <p>Jama-ath Residential Public School</p>
    <p>2024</p>

    <br />

    <p>
      <strong>Secondary School</strong>
    </p>
    <p>Jama-ath Residential Public School</p>
    <p>2022</p>

  </div>
)}

          

          {activeTab === "experience" && (
            <div>
              <h1>Experience</h1>
              <div className="exp-block">
                <p>
      <strong>Spectrum Softtech Solutions Pvt. Ltd.</strong>
    </p>
    <p>Cyber Security Intern</p>
    <p>9th June 2025 - 23rd June 2025</p>
    </div>

              <div className="exp-block">
              <p>
      <strong>Portfolio Builders (Portfolix Enterprise Pvt Ltd)</strong>
    </p>
    <p>Full Stack Intern</p>
    <p>15th June 2026 - 26th June 2026</p>
    </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div>
  <h3>Skills</h3>

  <div className="info-row">
    <span>Frontend</span>
    <span>HTML, CSS, JavaScript, React</span>
  </div>

  <div className="info-row">
    <span>Backend</span>
    <span>Node.js, Python</span>
  </div>

  <div className="info-row">
    <span>Database</span>
    <span>SQL</span>
  </div>

</div>
          )}

        </div>
      </div>
<div className="about-btn-container">
  <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
    <button className="projects-btn">
      View My Projects
    </button>
  </Link>
</div>



    </section>
  );
}

export default About;