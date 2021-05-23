import React from 'react';
import profilePic from "../../assets/profile-pic.jpg";

// This about page will show up as the first page when page is loaded
function About() {
  return (
    <section>
        <div className="profile hero" >
            <img src={profilePic} alt="profile of Nathan Schroeder" />
            <h2>
                Hi, I'm Nate, a UT Bootcamp student that is working to become a Full Stack Developer.
            </h2>
        </div>

        <div className="intro">
            <div className="section-title">
                <h2><span id="about-me"></span>
                    About Me
                </h2>
            </div>
            <div className="description">
                <p>
                I am an extremely self-driven Full-Stack Web Developer who thrives in a competitive and challenging web development environment. Experienced working with MERN stack, resulting in proficiency with JavaScript, React, Node, and Express. Excellent communicator passionate about coding and comfortable working remotely as part of a development team while bringing strong skills in problem-solving that will help increase efficiency and productivity.
                </p>
            </div>
        </div>
    </section>
  );
}

export default About;