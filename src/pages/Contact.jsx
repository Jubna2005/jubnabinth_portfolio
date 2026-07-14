import "../styles/pages.css";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="page">

      <h1>Contact Me</h1>

    
      <div className="contact-grid">

        <div className="contact-card">
  <FaEnvelope className="icon" />
  <h2>Email</h2>
  <p>
  <a href="mailto:jubnabinthyhdrose@gmail.com" className="contact-link">
    jubnabinthyhdrose@gmail.com
  </a>
</p>
</div>


        <div className="contact-card">
  
  <FaMapMarkerAlt className="icon" />

  <h2>Location</h2>
  <p>Kochi, Kerala, India</p>

</div>

        <div className="contact-card">

  <FaLinkedin className="icon" />

  <h2>LinkedIn</h2>

  <a 
    href="https://www.linkedin.com/in/jubna-binth-hydrose"
    target="_blank"
    rel="noreferrer"
    className="contact-link"
  >
    View Profile
  </a>

</div>

      </div>
<p className="contact-footer-text">
 I’m open to internships and exciting tech opportunities. 
 Feel free to reach out anytime — I’d love to connect and collaborate!
</p>


<div className="back-home">
  <Link to="/" className="back-btn">
    ← Back to Home
  </Link>
</div>

    </section>
  );
}

export default Contact;