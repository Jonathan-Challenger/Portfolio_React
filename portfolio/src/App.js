import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNav from "./components/AppNav";
import Home from "./components/Home";
import BlackboxMovies from "./components/detail_pages/BlackboxMovies";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <AppNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/projects/blackbox-movies'
            element={<BlackboxMovies />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
