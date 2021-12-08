import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id='projects'>
      <Container className='text-white' id='project-content'>
        <h2 className='section-title my-3'>Projects</h2>
        <div className='projects-info'>
          <Link to={"/projects/blackbox-movies"}>
            <div id='blackbox-movies'>
              <div className='overlay'>
                <p className='large'>View Project</p>
              </div>
            </div>
          </Link>
          <Link to={"/projects/PL-stats"}>
            <div id='premier-league-stats'>
              <div className='overlay'>
                <p className='large'>View Project</p>
              </div>
            </div>
          </Link>
          <Link to={"/projects/weather-app"}>
            <div id='weather-app'>
              <div className='overlay'>
                <p className='large'>View Project</p>
              </div>
            </div>
          </Link>
          <Link to={"/projects/weblog"}>
            <div id='weblog'>
              <div className='overlay'>
                <p className='large'>View Project</p>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
