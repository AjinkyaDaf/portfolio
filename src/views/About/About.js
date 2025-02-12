import React from "react";
import "./About.css"; // Import the external CSS file
import image from "../../assets/gf.png"; // Import the image

const AboutMe = () => {
  const skills = [
    { name: "UX", percentage: 95 },
    { name: "Website Design", percentage: 86 },
    { name: "App Design", percentage: 98 },
    { name: "Graphic Design", percentage: 90 },
  ];

  return (
    <div className="about-container">
      <div className="image-container">
        <img src={image} alt="Person" className="profile-image" />
      </div>
      <div className="content">
        <h2 className="heading">About Me</h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor
          massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh
          libero pharetra tristique.
        </p>
        {skills.map((skill, index) => (
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
  );
};

export default AboutMe;
