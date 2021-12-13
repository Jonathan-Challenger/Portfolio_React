import { Button, Container } from "reactstrap";

const Landing = () => {
  return (
    <section id='landing'>
      <Container className='text-white' id='landing-content'>
        <div className='titles'>
          <h1 className='heading'>
            I'm <span className='name'>Jonathan Challenger</span>
          </h1>
          <h3 className='fs-1'>Frontend Web Developer</h3>
          <Button color='danger' size='lg' className='my-3'>
            <a href='#about'>Find out More</a>
          </Button>
        </div>
      </Container>
      <ul className='circles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Landing;
