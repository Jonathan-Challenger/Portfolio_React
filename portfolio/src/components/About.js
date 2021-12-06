import { Button, Container } from "reactstrap";

const About = () => {
  return (
    <section id='about'>
      <Container className='text-white' id='about-content'>
        <h2 className='section-title my-3'>About</h2>
        <div className='about-info'>
          <p className='about-text'>
            I am a self-taught front-end web developer who is based in Reading,
            UK. I have a huge passion for creating intriguing UI effects and
            animations and{" "}
            <span className='highlight'>
              exciting, dynamic user experiences.
            </span>{" "}
            <br />
            <br />I am a recent graduate student completing my Masters in
            Cognitive Neuroscience from Reading University in September 2020.
            Now I am looking to start a career in web development. I am
            interested in all aspects of front-end web development and love
            working on{" "}
            <span className='highlight'>
              challenging and ambitious projects
            </span>{" "}
            with positive people. <br />
            <br />I am a hard-working, well-organised person who{" "}
            <span className='highlight'>loves to solve problems</span> using
            high attention to detail. Aside from web development I like to spend
            my time watching NFL, playing electric guitar, playing video games
            with friends and watching comedy movies.
          </p>
          <Button color='danger' outline className='my-4'>
            Lets work together
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default About;
