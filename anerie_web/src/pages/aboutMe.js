import './aboutMe.css';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    return (
        <div className="aboutBg">
            <div className="pfp"></div>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    )
}
export default About;