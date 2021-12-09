import { Container } from "reactstrap";

const WeatherApp = () => {
  return (
    <section id='weather-app-sec'>
      <Container className='text-white' id='weather-content'>
        <h2 className='section-title my-3'>Weather App</h2>
      </Container>
    </section>
  );
};

export default WeatherApp;
