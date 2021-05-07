import React from 'react';
import signature from "../../assets/signature4.png";

function Nav() {

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
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
            </ul>
        </nav>  
    </header>
  );
}

export default Nav;