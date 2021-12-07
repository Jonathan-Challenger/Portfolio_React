import { Container } from "reactstrap";
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
              "I have 6 months of experience using HTML to create various web applications. I am confident in creating front-end applications using my knowledge of HTML."
            }
          />
          <SkillItem
            title={"CSS3"}
            icon={<i class='fab fa-css3-alt fa-4x' id='css'></i>}
            text={
              "I have been using CSS for 6 months to style my web application with a focus on responsive design. I also have knowledge and experience using Bootstrap and Sass."
            }
          />
          <SkillItem
            title={"JavaScript"}
            icon={<i class='fab fa-js fa-4x' id='js'></i>}
            text={
              "I have 6 months of experience using JavaScript to add functionality to web apps. I am confident in DOM manipulation, making asynchronous calls and ES6 features."
            }
          />
          <SkillItem
            title={"React"}
            icon={<i class='fab fa-react fa-4x' id='react'></i>}
            text={
              "I have been using React for a few months and created front-end and full-stack apps with react. I am confident using hooks, react-router and redux for state management."
            }
          />
          <SkillItem
            title={"Vue"}
            icon={<i class='fab fa-vuejs fa-4x' id='vue'></i>}
            text={
              "I have several months experience using Vue to create front-end applications. I am comfortable with the Vue ecosystem, router and VueX."
            }
          />
          <SkillItem
            title={"Git"}
            icon={<i class='fab fa-git fa-4x'></i>}
            text={
              "I have over 1 years experience using Git and experience using GitHub to work collaboratively with others as well as documenting my self-teaching journey."
            }
          />
          <SkillItem
            title={"Node.js"}
            icon={<i class='fab fa-node-js fa-4x' id='node'></i>}
            text={
              "I have some experience using Nodejs on the backend to set up a server and connect to a database. I also have experience using Express."
            }
          />
          <SkillItem
            title={"Python"}
            icon={<i class='fab fa-python fa-4x' id='python'></i>}
            text={
              "I have over 1 years experience with Python with good knowledge of syntax and using python in data analysis using libraries such as numpy, pandas and sci-kit learn."
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
