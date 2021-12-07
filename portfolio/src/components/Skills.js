import { Container, Card, CardBody, CardText, CardTitle } from "reactstrap";

const Skills = () => {
  return (
    <section id='skills'>
      <Container id='skills-content'>
        <h2 className='section-title my-5'>Skills</h2>
        <div className='skills-info'>
          <div className='card-item mx-1'>
            <Card color='danger' outline>
              <CardBody>
                <i className='fab fa-html5 fa-4x' id='html'></i>
                <CardTitle tag='h5'>HTML5</CardTitle>
                <CardText>
                  I have 6 months experience using HTML to build various
                  front-end and full-stack web applications. I am very confident
                  in my HTML skills.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className='card-item mx-1'>
            <Card color='danger' outline>
              <CardBody>
                <i className='fab fa-css3-alt fa-4x' id='css'></i>
                <CardTitle tag='h5'>CSS3</CardTitle>
                <CardText>
                  I have 6 months experience using CSS to style front-end
                  applications with knowledge of Sass and Bootstrap and a focus
                  for responsive design.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className='card-item mx-1'>
            <Card color='danger' outline>
              <CardBody>
                <i class='fab fa-js fa-4x' id='js'></i>
                <CardTitle tag='h5'>JavaScript</CardTitle>
                <CardText>
                  I have 6 months experience using JavaScript to add
                  functionality to web apps. I am confident with ES6 features
                  and manipulating DOM elements with js.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className='card-item mx-1'>
            <Card color='danger' outline>
              <CardBody>
                <i class='fab fa-react fa-4x' id='react'></i>
                <CardTitle tag='h5'>React</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className='card-item mx-1'>
            <Card color='danger' outline>
              <CardBody>
                <i class='fab fa-vuejs fa-4x' id='vue'></i>
                <CardTitle tag='h5'>Vue</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className='card-item mx-1'>
            <Card color='danger' outline>
              <CardBody>
                <i class='fab fa-git fa-4x'></i>
                <CardTitle tag='h5'>Git</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
