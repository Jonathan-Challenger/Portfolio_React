import { Container, Button } from "reactstrap";
import plstats from "../../img/plstats.png";

const PLStats = () => {
  return (
    <section id='pl-stats'>
      <Container className='text-white' id='plstats-content'>
        <img
          src={plstats}
          alt='Premier League stats background'
          id='plstats-back'
        />
        <h2 className='section-title my-3'>Premier League Stats</h2>
        <div className='main-content'>
          <div className='desc'>
            <p>
              Premier League Stats is a web application which presents the user
              with various statistics of the 2021/2022 premier league season.
              The users can see the current table standings, find information
              about each team and information about the current top scorers.{" "}
              <br />
              <br />
              Throughout this project I learnt a lot about using Redux to store
              information that has been fetched from an API and to use React in
              order to display this information for the user.
            </p>
          </div>
          <div className='key-skills'>
            <h3>Skills used</h3>
            <div className='skills-used'>
              <p className='skill-item'>React</p>
              <p className='skill-item'>CSS</p>
              <p className='skill-item'>JavaScript</p>
              <p className='skill-item'>API</p>
              <p className='skill-item'>Git</p>
              <p className='skill-item'>Redux</p>
            </div>
          </div>
        </div>
        <div className='button-links'>
          <Button color='danger'>
            <a
              href='https://github.com/Jonathan-Challenger/React-projects/tree/main/FootballStats/client'
              target='_blank'
              rel='noreferrer'
            >
              View Source Code
            </a>
          </Button>
          <Button color='danger' outline>
            <a
              href='https://pl-statistics.netlify.app/'
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

export default PLStats;
