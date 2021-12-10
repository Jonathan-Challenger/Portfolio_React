import { Container, Button } from "reactstrap";
import weatherDetail from "../../img/weatherDetail.png";

const WeatherApp = () => {
  return (
    <section id='weather-app-sec'>
      <Container className='text-white' id='weather-content'>
        <img
          src={weatherDetail}
          alt='Weather app background'
          id='weather-back'
        />
        <h2 className='section-title my-3'>Weather App</h2>
        <div className='main-content'>
          <div className='desc'>
            <p>
              The weather app is a simple weather app allowing users to look up
              information regarding the weather for different towns/cities
              around the world. It includes information such as temperature,
              current time at the location, humidity, wind speed etc. <br />
              <br />
              This project was my introduction to using vanilla JavaScript and
              jQuery to add functionality to web apps and to fetch data from an
              API. This project helped me a lot to expand my knowledge of how to
              use JavaScript to manipulate DOM elements.
            </p>
          </div>
          <div className='key-skills'>
            <h3>Skills used</h3>
            <div className='skills-used'>
              <p className='skill-item'>jQuery</p>
              <p className='skill-item'>HTML</p>
              <p className='skill-item'>CSS</p>
              <p className='skill-item'>JavaScript</p>
              <p className='skill-item'>API</p>
              <p className='skill-item'>Git</p>
            </div>
          </div>
        </div>
        <div className='button-links'>
          <Button color='danger'>
            <a
              href='https://github.com/Jonathan-Challenger/Web-Dev/tree/main/WeatherApp'
              target='_blank'
              rel='noreferrer'
            >
              View Source Code
            </a>
          </Button>
          <Button color='danger' outline>
            <a
              href='https://jonathan-weather-app.netlify.app/'
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

export default WeatherApp;
