import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNav from "./components/AppNav";
import Landing from "./components/Landing";
import About from "./components/About";

const App = () => {
  return (
    <div className='App'>
      <AppNav />
      <Landing />
      <About />
    </div>
  );
};

export default App;
