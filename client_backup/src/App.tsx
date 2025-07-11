import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PlanetSlideshow from './components/PlanetSlideshow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planets" element={<PlanetSlideshow />} />
      </Routes>
    </Router>
  );
}

export default App;
