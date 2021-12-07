import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNav from "./components/AppNav";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className='App'>
      <AppNav />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
