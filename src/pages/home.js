import React, { useState  } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import aboutIcon from '../img/aboutMe.png';
import projectsIcon from '../img/projects.png';
import contactIcon from '../img/contactMe.png';
import lightAbout from '../img/lightAbout.png';
import lightContact from '../img/lightContact.png';
import lightProjects from '../img/lightProjects.png';
import darkBg from '../img/mainBg.png';
import lightBg from '../img/lightBg.png';
import lightName from '../img/lighFullName.png';
import darkName from "../img/anerie.png";
import './home.css';
import sunIcon from '../img/sun.png';
import moonIcon from '../img/moon.png';
import { Box, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function Home() {
  const [isLightMode, setIsLightMode] = useState(false);
  const navigate = useNavigate();
  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <div>
      <div 
        className="bg"
        style={{
          backgroundImage: `url(${isLightMode ? lightBg : darkBg})`,
        }}
      >
        <div className="topButtons">
  <div className="iconButton" onClick={toggleTheme}>
    <img 
      src={isLightMode ? moonIcon : sunIcon} 
      alt="Toggle Theme" 
    />
  </div>

  <div className="iconButton" onClick={() => navigate('/photobooth')}>
    <CameraAltIcon 
      style={{ 
        fontSize: 40, 
        color: isLightMode ? '#0A005B' : '#BBE6E9' 
      }} 
    />
  </div>
</div>


        <div className="fullName"
        style={{
          backgroundImage: `url(${isLightMode ? lightName : darkName})`,
        }}
        ></div>

        {/* Links */}
        <div className="buttonContainer">
          <Link to="/about">
            <img src={isLightMode ? lightAbout : aboutIcon} alt="About" />
          </Link>

          <Link to="/projects">
            <img src={isLightMode ? lightProjects : projectsIcon} alt="Projects" />
          </Link>

          <Link to="/contact">
            <img src={isLightMode ? lightContact : contactIcon} alt="Contact" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          color: isLightMode ? '#0A005B' : '#BBE6E9',
          background: isLightMode ? '#D7FFFD' : '#0E045D',
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
