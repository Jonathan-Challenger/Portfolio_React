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
        </div>
        <Button color='danger' size='lg'>
          Find out More
        </Button>
      </Container>
    </section>
  );
};

export default Landing;
