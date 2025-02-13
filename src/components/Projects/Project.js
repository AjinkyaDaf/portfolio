import React, { useState } from "react";
import image from "../../assets/gf.png"; // Import the image
import "./Project.css"; // Import external CSS file

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "UI UX", "Website Design", "Graphic Design", "App Design"];

  const projects = [
    {
      id: 1,
      title: "Marketing Landing Page Design",
      category: "Graphic Design",
      image: image,
    },
    {
      id: 2,
      title: "Landing Page Design",
      category: "Website Design",
      image: image,
    },
    {
      id: 3,
      title: "Landing Page Design",
      category: "Website Design",
      image: image,
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <p className="projects-description">
        Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim molestie dolor commodo
        mauris dolor amet. Nulla pellentesque Id pulvinar consequat eni.
      </p>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          // <div key={project.id} className="project-card">
          //   <img src={project.image} alt={project.title} className="project-image" />
          //   <p className="project-category">{project.category}</p>
          //   <h3 className="project-title">{project.title}</h3>
          // </div>
          <div key={project.id} className="project-card">
  <img src={project.image} alt={project.title} className="project-image" />
  <div className="project-details">
    <p className="project-category">{project.category}</p>
    <h3 className="project-title">{project.title}</h3>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Projects;