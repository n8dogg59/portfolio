import React from 'react';
import Project from '../Project';

// All the projects that are displayed here will come in from the Project component
function Portfolio() {
  return (
    <section className="working">
        <div className="section-title">
            <h2><span id="portfolio"></span>
                Projects
            </h2>
        </div>
        <div>
      <Project></Project>
      </div>
    </section>
  );
}
export default Portfolio;