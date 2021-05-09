import React from 'react';
import Project from '../Project';

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