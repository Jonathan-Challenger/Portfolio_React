import { Container } from "reactstrap";

const Contact = () => {
  return (
    <section id='contact'>
      <Container className='text-white' id='contact-content'>
        <h2 className='section-title my-3'>Contact</h2>
        <div className='contact-info'>
          <div className='email my-4'>
            <a
              href='mailto:jonathan.challenger@gmail.com'
              title='Email me'
              rel='noreferrer'
              target='_blank'
            >
              jonathan.challenger@gmail.com
            </a>
          </div>
          <div className='contact-links my-3'>
            <a
              href='https://www.linkedin.com/in/jonathan-challenger-448a701b3/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin fa-3x mx-4'></i>
            </a>
            <a
              href='https://github.com/Jonathan-Challenger'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github fa-3x mx-4'></i>
            </a>
          </div>
          <div className='copyright mt-5'>&#169; 2021 Jonathan Challenger</div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
