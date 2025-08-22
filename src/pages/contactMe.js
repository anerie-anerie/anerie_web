import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './contactMe.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import ContactForm from './ContactForm.js';

function Contact() {
    const navigate = useNavigate();

    return (
        <div className="contactBg">
          
          {/* Contact content */}
          <div className="contactContent">
            {/* Form on top */}
            <ContactForm />

            {/* Connect with me section */}
            <div className="contactSocialSection">
              <h2 style={{color: '#B80386'}}>Connect with me</h2>
              <div className="socialIcons">
                <a href="https://github.com/anerie-anerie" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon sx={{ fontSize: 60, color: '#BBE6E9', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.2)' } }} />
                </a>
                <a href="https://www.linkedin.com/in/anerie-patel/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ fontSize: 60, color: '#BBE6E9', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.2)' } }} />
                </a>
                <a href="mailto:aneriep@gmail.com">
                  <EmailIcon sx={{ fontSize: 60, color: '#BBE6E9', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.2)' } }} />
                </a>
              </div>
            </div>

            <button className="buttonBack" onClick={() => navigate('/')}></button>
          </div>

        </div>
    );
}

export default Contact;
