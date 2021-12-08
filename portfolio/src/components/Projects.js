import { Container } from "reactstrap";

const Projects = () => {
  return (
    <section id='projects'>
      <Container className='text-white' id='project-content'>
        <h2 className='section-title my-3'>Projects</h2>
        <div className='projects-info'>
          <div id='blackbox-movies'>
            <div className='overlay'>
              <p className='large'>View Project</p>
            </div>
          </div>
          <div id='premier-league-stats'>
            <div className='overlay'>
              <p className='large'>View Project</p>
            </div>
          </div>
          <div id='weather-app'>
            <div className='overlay'>
              <p className='large'>View Project</p>
            </div>
          </div>
          <div id='weblog'>
            <div className='overlay'>
              <p className='large'>View Project</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
