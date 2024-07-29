
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bed from './pages/bedsheets/Bed';
import Login from './components/login/Login';
import Account from './components/account/Account';



function App() {
  return (
    <>
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/bedsheets" element={<Bed />} />
        <Route path='/account' element={<Account/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
