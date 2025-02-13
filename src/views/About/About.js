import React from "react";
import "./About.css"; // Import external CSS file

const AboutMe = () => {
  const skills = [
    { name: "UX", percentage: 95 },
    { name: "Website Design", percentage: 86 },
    { name: "App Design", percentage: 98 },
    { name: "Graphic Design", percentage: 90 },
    { name: "Branding", percentage: 85 },
    { name: "Illustration", percentage: 80 },
    { name: "Wireframing", percentage: 92 },
    { name: "Prototyping", percentage: 88 },
  ];

  return (
    <div className="about-container">
      <h2 className="heading">About Me</h2>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor
        massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh
        libero pharetra tristique.
      </p>
      <div className="skills-section">
        <div className="skills-column">
          {skills.slice(0, 4).map((skill, index) => (
            <div key={index} className="skill-container">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-column">
          {skills.slice(4, 8).map((skill, index) => (
            <div key={index} className="skill-container">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
