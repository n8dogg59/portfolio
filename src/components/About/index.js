import React from 'react';
import profilePic from "../../assets/profile-pic.jpg";

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
                I am an extremely self driven full-stack web developer that has worked remotely the last ten years and will thrive in the competitive and sometimes stressful environment web development. Experienced in working with the MERN stack, and as a result am proficient in JavaScript, React, Node, and Express. Excellent communicator that is passionate about coding and comfortable working remotely as part of a development team while bringing strong skills in problem solving that will help increase efficiency and productivity.
                </p>
            </div>
        </div>
    </section>
  );
}

export default About;