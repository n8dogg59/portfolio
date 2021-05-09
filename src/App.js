import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import resumePDF from "./assets/project-images/resume-schroeder.pdf";
import Footer from "./components/Footer";



function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);


  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        aboutSelected={portfolioSelected}
        setAboutSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {contactSelected ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : portfolioSelected ? (
          <Portfolio></Portfolio>
        ) : resumeSelected ? (
          <div className="all-page-container">
            <Resume pdf={resumePDF} />
          </div>
        ) : (
          <About></About>
        ) 
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;