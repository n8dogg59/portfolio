import React from 'react';
import signature from "../../assets/signature4.png";

function Nav(props) {
    const {
        setPortfolioSelected,
        portfolioSelected,
        contactSelected,
        setContactSelected,
        setAboutSelected,
        aboutSelected,
        setResumeSelected,
        resumeSelected,
      } = props;
  return (
    <header>
        <h1 id="top">
            <a href="/">
                <img src={signature} alt="nathan schroeder's signature" />
            </a>
        </h1>  
        <nav className="menu">
            <ul>
                <li>
                    <a href="#about-me" onClick={() => {setContactSelected(false); setPortfolioSelected(false); setResumeSelected(false)}}>About Me</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => {setPortfolioSelected(true); setContactSelected(false); setResumeSelected(false)}}>Portfolio</a>
                </li>
                <li>
                    <a href="#resume" onClick={() => {setResumeSelected(true); setContactSelected(false); setPortfolioSelected(false)}}>Resume</a>
                </li>
                <li>
                    <a href="#contact-me" onClick={() => setContactSelected(true)}>Contact Me</a>
                </li>
            </ul>
        </nav>  
    </header>
  );
}

export default Nav;