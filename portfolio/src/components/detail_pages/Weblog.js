import { Container, Button } from "reactstrap";
import weblogDetail from "../../img/weblogDetail.png";

const Weblog = () => {
  return (
    <section id='weblog-sec'>
      <Container className='text-white' id='weblog-content'>
        <img src={weblogDetail} alt='Weblog background' id='weblog-back' />
        <h2 className='section-title my-3'>WeBlog</h2>
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
              <p className='skill-item'>React</p>
              <p className='skill-item'>Redux</p>
              <p className='skill-item'>CSS</p>
              <p className='skill-item'>JavaScript</p>
              <p className='skill-item'>Node js</p>
              <p className='skill-item'>Git</p>
            </div>
          </div>
        </div>
        <div className='button-links'>
          <Button color='danger'>
            <a
              href='https://github.com/Jonathan-Challenger/BlogApp'
              target='_blank'
              rel='noreferrer'
            >
              View Source Code
            </a>
          </Button>
          <Button color='danger' outline>
            <a
              href='https://polar-scrubland-34473.herokuapp.com/'
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

export default Weblog;
