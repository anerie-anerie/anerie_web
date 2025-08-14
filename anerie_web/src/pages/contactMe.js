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
                <GitHubIcon sx={{ fontSize: 40, color: 'primary.main', '&:hover': { color: 'secondary.main' } }} />
            </a>

            <a 
              href="https://www.linkedin.com/in/anerie-patel-962a75275/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
                <LinkedInIcon sx={{ fontSize: 40, color: 'primary.main', '&:hover': { color: 'secondary.main' } }} />
            </a>

            <a 
              href="mailto:aneriep@gmail.com" 
              style={{ color: 'inherit' }}
            >
                <EmailIcon sx={{ fontSize: 40, color: 'primary.main', '&:hover': { color: 'secondary.main' } }} />
            </a>

            <button onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default Contact;
