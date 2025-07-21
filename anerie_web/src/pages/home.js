import React from 'react';
import { Link } from 'react-router-dom';
import aboutIcon from '../img/aboutMe.png';
import projectsIcon from '../img/projects.png';
import contactIcon from '../img/contactMe.png';

function Home() {
  return (
    <div className="App">
      <div className="bg">
        <div className="fullName"></div>

        <div className="buttonContainer">
          <Link to="/about">
            <img src={aboutIcon} alt="About" />
          </Link>

          <Link to="/projects">
            <img src={projectsIcon} alt="Projects" />
          </Link>

          <Link to="/contact">
            <img src={contactIcon} alt="Contact" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
