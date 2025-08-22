import { useNavigate } from 'react-router-dom';
import './projects.css';

function Projects() {
    const navigate = useNavigate();

    return (
        <div className="projectBg">
            <div className="title"></div>

            <div className="projectContainer">
                <div className="project">
                    <h2 className="projectTitle">Meme the Dream</h2>
                    <p className="projectDescription">
                        We created Meme the Dream at JPEG Hackathon. This browser game allows players to match meme poses using their webcam. You play as Kyle, a high schooler battling raccoons with perfectly timed meme poses.
                    </p>
                    <div className="skills">
                        <span className="skill">Flask API</span>
                        <span className="skill">OpenCV</span>
                        <span className="skill">MediaPipe</span>
                    </div>
                    <a
                        href="https://meme-the-dream.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectLink"
                    >
                        Play it now!
                    </a>
                    <a
                        href="https://github.com/Tishya-2008/meme-the-dream"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectLink"
                    >
                        GitHub
                    </a>
                </div>

                <div className="project">
                    <h2 className="projectTitle">Lunarhacks Website</h2>
                    <p className="projectDescription">
                        We designed and coded the Lunarhacks website. We utilized the React framework and Figma design to create an adaptive site for all to use.
                    </p>
                    <div className="skills">
                        <span className="skill">React</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">CSS</span>
                    </div>
                    <a
                        href="https://lunarhacks.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectLink"
                    >
                        Check it out!
                    </a>
                    <a
                        href="https://github.com/lunarhacks-org/lh-org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectLink"
                    >
                        GitHub
                    </a>
                </div>

                <h2 className="comingSoon">Check out more projects coming!</h2>
            </div>

            <button className="button" onClick={() => navigate('/')}></button>
        </div>
    );
}

export default Projects;
