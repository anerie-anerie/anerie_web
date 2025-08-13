import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();
    return (
        <div>
        <h1> hello! you are in projects</h1>
        <button className="button" onClick={() => navigate('/')}></button>
        </div>
    )
}
export default Projects;