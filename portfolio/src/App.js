import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNav from "./components/AppNav";
import Home from "./components/Home";
import BlackboxMovies from "./components/detail_pages/BlackboxMovies";
import PLStats from "./components/detail_pages/PLStats";
import WeatherApp from "./components/detail_pages/WeatherApp";
import Weblog from "./components/detail_pages/Weblog";

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
          <Route path='/projects/PL-stats' element={<PLStats />} />
          <Route path='/projects/weather-app' element={<WeatherApp />} />
          <Route path='/projects/weblog' element={<Weblog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
