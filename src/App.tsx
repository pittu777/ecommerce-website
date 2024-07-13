
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Navbar from './components/nav-bar/Navbar';
import Home from './pages/home/Home';


function App() {
  return (
    <>
    <div>
      <Header/>
      <Navbar/>
      <Home/>
    </div>
    </>
  );
}

export default App;
