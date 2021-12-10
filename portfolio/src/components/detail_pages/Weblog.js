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
              WeBlog is a full stack MERN blogging app which allows users to
              create an account and a profile and to create posts on a feed.
              Users can also interact with other users' posts through commenting
              or liking.
              <br />
              <br />
              This project helped to solidify my front-end knowledge including
              React and Redux. However, throughout this project I gained a lot
              of knowledge regarding back-end development and my understanding
              grew substantially.
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
