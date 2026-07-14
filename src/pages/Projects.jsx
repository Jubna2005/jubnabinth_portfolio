import { useState } from "react";
import "../styles/pages.css";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";



function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern React portfolio with animations.",
      image: project2,
      
    
    },
    {
      title: "Calculator",
      description: "Simple calculator using react.",
      image: project1,
      
    },
    {
      title: "Website",
      description: "Simple Website with interactive pages.",
      image: project3,
      
    }
  ];

  return (
    <section className="projects-page">

      <h1 className="projects-title">
        My Projects
      </h1>

      <div className="projects-container">

  {projects.map((project, index) => (
  <div 
    className="project-card" 
    key={index}
    onClick={() => setSelectedVideo(project.video)}
  >

    <img 
      src={project.image} 
      alt={project.title} 
      className="project-img"
    />

    <h2>{project.title}</h2>
    <p>{project.description}</p>

  </div>
))}
{selectedVideo && (
  <div className="video-modal" onClick={() => setSelectedVideo(null)}>
    
    <div 
      className="video-content" 
      onClick={(e) => e.stopPropagation()}
    >
      
      <video controls autoPlay>
        <source src={selectedVideo} type="video/mp4" />
      </video>

    </div>

  </div>
)}

</div>

    </section>
  );
}

export default Projects;