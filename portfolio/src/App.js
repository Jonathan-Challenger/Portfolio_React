import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNav from "./components/AppNav";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div className='App'>
      <AppNav />
      <Landing />
    </div>
  );
};

export default App;
