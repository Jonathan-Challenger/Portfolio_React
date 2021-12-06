import { Container, Card, CardBody, CardText, CardTitle } from "reactstrap";

const Skills = () => {
  return (
    <section id='skills'>
      <Container id='skills-content'>
        <h2 className='section-title my-5'>Skills</h2>
        <div className='skills-info'>
          <div className='card-item mx-1'>
            <Card color='danger'>
              <CardBody>
                <CardTitle tag='h5'>Card title</CardTitle>

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
                <CardTitle tag='h5'>Card title</CardTitle>

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
                <CardTitle tag='h5'>Card title</CardTitle>

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
                <CardTitle tag='h5'>Card title</CardTitle>

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
                <CardTitle tag='h5'>Card title</CardTitle>

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
