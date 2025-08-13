import React from 'react';
import { Link } from 'react-router-dom';
import aboutIcon from '../img/aboutMe.png';
import projectsIcon from '../img/projects.png';
import contactIcon from '../img/contactMe.png';
import './home.css'
import sunIcon from '../img/sun.png';
import moonIcon from '../img/moon.png';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <div>
      <div className="bg">
        <div className="fullName"></div>
        <div className="buttonContainer">

        </div>

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
      <Box
        component="footer"
        sx={{
          color: '#BBE6E9',
          background: '#0A005B',
          textAlign: 'center',
          py: 1.5,
        }}
      >
        <Typography variant="body2">
          made with ❤ by Anerie | {new Date().getFullYear()}
        </Typography>
      </Box>
      </div>
      
  );
}

export default Home;
