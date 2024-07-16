
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Navbar from './components/nav-bar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bed from './pages/bedsheets/Bed';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bedsheets" element={<Bed />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
