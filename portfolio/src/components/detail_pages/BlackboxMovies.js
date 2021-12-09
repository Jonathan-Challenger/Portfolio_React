import { Container, Button } from "reactstrap";
import blackbox from "../../img/blackbox.png";

const BlackboxMovies = () => {
  return (
    <section id='blackboxMovies'>
      <Container className='text-white' id='blackbox-content'>
        <img
          src={blackbox}
          alt='Blackbox movies background'
          id='blackbox-back'
        />
        <h2 className='section-title my-3'>Blackbox Movies</h2>
        <div className='main-content'>
          <div className='desc'>
            <p>
              BlackBox Movies is a movie database application similar to IMDB.
              The users can look at the most popular movies and tv shows at the
              time and read the description and rating. The user can also search
              for any movie, tv show or actor they want. <br />
              <br />
              This project taught me a lot about fetching data from an API and
              how to use this data in my application using a front-end
              framework. I also solidified my knowledge of the Vue ecosystem and
              how to write clean, efficient code in Vue.
            </p>
          </div>
          <div className='key-skills'>
            <h3>Skills used</h3>
            <div className='skills-used'>
              <p className='skill-item'>Vuejs</p>
              <p className='skill-item'>HTML</p>
              <p className='skill-item'>CSS</p>
              <p className='skill-item'>JavaScript</p>
              <p className='skill-item'>API</p>
              <p className='skill-item'>Git</p>
            </div>
          </div>
        </div>
        <div className='button-links'>
          <Button size='lg' color='danger'>
            <a
              href='https://github.com/Jonathan-Challenger/Web-Dev/tree/main/vue-projects/movie-app'
              target='_blank'
              rel='noreferrer'
            >
              View Source Code
            </a>
          </Button>
          <Button size='lg' color='danger' outline>
            <a
              href='https://blackbox-movies.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              View Website Demo
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BlackboxMovies;
