import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNav from "./components/AppNav";

const App = () => {
  return (
    <div className='App'>
      <AppNav />
      <h1>Hello World</h1>
      <p>This is my new portfolio</p>
    </div>
  );
};

export default App;
