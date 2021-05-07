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
                    My name is Nathan Schroeder, I'd prefer Nate but I'll answer to either, and I'm currently a student in the UT Full Stack bootcamp which will conclude in May 2021.  I'm 
                    the father of two children, Sophia 5 and Willie 1, and have been married to my amazing wife for 16 years.  I've never worked with html or css, or any web languages for 
                    that matter, so the website you are viewing is after two weeks of education.  I actually have a programming degree from Eastern Illinois University, mostly centered 
                    around cobol and you will see listed if you click on the resume image below, but I never actually went on to use that degree in any way although I've always thought 
                    I would enjoy a career in some type developer role. 
                </p>
                <p>
                    I've had a number of diverse careers throughout my life that in my opinion were fantastic primers for being a successful full stack developer.  Out of college I got
                    started in sales for the simple fact that I was looking for the job that would pay the most.  In hindsight I was young and dumb and found out this is no way to be
                    happy in life.  I spent most of that time, 6 years, in commercial real estate sales specializing in apartment complexes and then took a position managing a large 
                    commercial real estate portfolio for a private company.  Although I was relatively successful I found out within a few years how much I disliked the money hungry 
                    sleaziness of the real estate world and started planning for a career in something that I would enjoy and also give me the lifestyle I wanted with having a family.  
                    I settled on securities trading, which is a fancy way of saying day trading, and have been in that role for the last eight years of my life.  I have thoroughly enjoyed 
                    most everything that comes along with being a day trader but the stress and hours have made me once again look for career that would fit my current life better. 
                </p>
                <p>
                    I believe these previous careers have made me an ideal candidate to be an outstanding full stack developer.  Day trading is basically solving puzzles and being
                    determined enough to succeed and I've learned throughout my life there are few people more driven than myself.  The skills of problem solving, planning for the coming
                    day and week, and being driven enough to work alone should translate extremely well to whats needed to be a succesful full stack developer.  Being a commercial real estate
                    sales person prepared me to with the social and communication skills needed to work with fellow team member and deal with customers.  Please check out my projects below
                    and know that if you hire me you will not only get someone with the technical skills required to build those projects but also the myriad of other skills and personality 
                    traits that would make me an ideal hire.
                </p>
            </div>
        </div>
    </section>
  );
}

export default About;