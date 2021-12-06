import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNav from "./components/AppNav";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className='App'>
      <AppNav />
      <Landing />
      <About />
      <Skills />
    </div>
  );
};

export default App;
