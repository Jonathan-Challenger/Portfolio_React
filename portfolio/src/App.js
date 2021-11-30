import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <h1>Hello World</h1>
      <p>This is my new portfolio</p>
    </div>
  );
};

export default App;
