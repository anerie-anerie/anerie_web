import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './contactMe.css';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    return (
        <div className="contactBg" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a 
              href="https://github.com/anerie-anerie" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
                <GitHubIcon sx={{ fontSize: 60, color: '#BBE6E9', '&:hover':  {transform: 'scale(1.2)'}}} />
            </a>

            <a 
              href="https://www.linkedin.com/in/anerie-patel-962a75275/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
                <LinkedInIcon sx={{ fontSize: 60, color: '#BBE6E9', '&:hover':  {transform: 'scale(1.2)'}}} />
            </a>

            <a 
              href="mailto:aneriep@gmail.com" 
              style={{ color: 'inherit' }}
            >
                <EmailIcon sx={{ fontSize: 60, color: '#BBE6E9', '&:hover':  {transform: 'scale(1.2)'}}} />
            </a>

            <button className="button" onClick={() => navigate('/')}></button>
        </div>
    )
}

export default Contact;
