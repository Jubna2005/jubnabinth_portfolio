import { motion } from "framer-motion";
import "../styles/home.css";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="intro">Hello, I'm</p>

          <h1>JUBNA BINTH HYDROSE</h1>

          <h2>B.Tech CSE Student</h2>

          <p className="role">
            Computer Science Enthusiast 
          </p>

          <p className="description">
            Aspiring data analyst passionate about turning data into meaningful insights and decisions.
          </p>

          {/* BUTTONS */}
          <div className="buttons">
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <button className="know-btn">Know More</button>
            </Link>

            <a href="/resume.pdf" download className="resume-btn">
              Download Resume
            </a>

           
          </div>

<p className="contact-redirect">
  Want to get in touch? 
  <Link to="/contact"> Contact me </Link>
</p>

        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profile} alt="Jubna Binth Hydrose" />
        </motion.div>

      </section>

   <div className="stats">

  <div className="stat-box">
    <h2>2</h2>
    <p>Experiences</p>
  </div>

  <div className="stat-box">
    <h2>3</h2>
    <p>Projects Done</p>
  </div>

  <div className="stat-box">
    <h2>2+</h2>
    <p>Technologies</p>
  </div>

</div>

    </div>
  );
}

export default Home;