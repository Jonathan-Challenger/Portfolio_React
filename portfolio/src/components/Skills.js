import { Container, Card, CardBody, CardText, CardTitle } from "reactstrap";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <section id='skills'>
      <Container id='skills-content'>
        <h2 className='section-title my-5'>Skills</h2>
        <div className='skills-info'>
          <SkillItem
            title={"HTML5"}
            icon={<i class='fab fa-html5 fa-4x' id='html'></i>}
            text={
              "I have been using React for a few months now and created front-end and full-stack apps with react. I am confident using hooks, react-router and redux for state management."
            }
          />
          <SkillItem
            title={"CSS3"}
            icon={<i class='fab fa-css3-alt fa-4x' id='css'></i>}
            text={
              "I have been using React for a few months now and created front-end and full-stack apps with react. I am confident using hooks, react-router and redux for state management."
            }
          />
          <SkillItem
            title={"JavaScript"}
            icon={<i class='fab fa-js fa-4x' id='js'></i>}
            text={
              "I have been using React for a few months now and created front-end and full-stack apps with react. I am confident using hooks, react-router and redux for state management."
            }
          />
          <SkillItem
            title={"React"}
            icon={<i class='fab fa-react fa-4x' id='react'></i>}
            text={
              "I have been using React for a few months now and created front-end and full-stack apps with react. I am confident using hooks, react-router and redux for state management."
            }
          />
          <SkillItem
            title={"Vue"}
            icon={<i class='fab fa-vuejs fa-4x' id='vue'></i>}
            text={
              "I have been using React for a few months now and created front-end and full-stack apps with react. I am confident using hooks, react-router and redux for state management."
            }
          />
          <SkillItem
            title={"Git"}
            icon={<i class='fab fa-git fa-4x'></i>}
            text={
              "I have been using React for a few months now and created front-end and full-stack apps with react. I am confident using hooks, react-router and redux for state management."
            }
          />
          <SkillItem
            title={"Node.js"}
            icon={<i class='fab fa-node-js fa-4x' id='node'></i>}
            text={
              "I have been using React for a few months now and created front-end and full-stack apps with react. I am confident using hooks, react-router and redux for state management."
            }
          />
          <SkillItem
            title={"Python"}
            icon={<i class='fab fa-python fa-4x' id='python'></i>}
            text={
              "I have been using React for a few months now and created front-end and full-stack apps with react. I am confident using hooks, react-router and redux for state management."
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
