import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';


// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Finger Fiasco",
    description: "A fast-paced typing game to test and improve your typing speed. Built using HTML, CSS, JavaScript with custom game logic and animated UI.",
    image: "/lovable-uploads/finger-fiasco.png",
    tags: ["React", "Next",  "Node", "Express",  "Mongodb"],
    demoUrl: "https://codemaster531.github.io/FingerFiasco/home.html",
    githubUrl: "https://github.com/CodeMaster531/FingerFiasco"
  },
  {
    id: 2,
    title: "Pinterest Clone",
    description: "A visually rich and fully responsive Pinterest Clone crafted using React, React Router, and Tailwind CSS, offering a seamless browsing experience with smooth navigation and a modern UI design.",
    image: "/lovable-uploads/pinterest-clone .png",
    tags: ["Node.js", "REST", "Express","Tailwind CSS"],
    demoUrl: "https://github.com/codemaster531/Pinterest-Clone",
    githubUrl: "https://github.com/codemaster531Pinterest-Clone"
  },
  {
    id: 3,
    title: "Cheese Oven",
    description: " A vibrant and appetizing landing page for a pizza store, an interactive menu, online ordering, and special offers to entice customers.",
    image: "/lovable-uploads/Pizza-Store-Landing-Page.png",
    tags: ["React",   "Node", "Express",   "Mongo","Next"],
    demoUrl: "https://codemaster531.github.io/Landing-Page-Project/",
    githubUrl: "https://github.com/CodeMaster531/Landing-Page-Project"
  },
   {
    id: 4,
    title: "Portfolio Website",
    description: "My portfolio website featuring my projects, skills, and journey. Built with HTML, CSS, and JavaScript for a modern, interactive experience.",
    image: "/lovable-uploads/portfolio.png",
    tags: ["React",  "TypeScript", "Node", "Express"],
    demoUrl: "https://codemaster531.github.io/my-Portfolio",
    githubUrl: "https://github.com/CodeMaster531/my-portfolio"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    
    </section>
  );
};

export default Projects;
