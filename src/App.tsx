
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from './pages/home/Home';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Bed from './pages/bedsheets/Bed';
// import Login from './components/login/Login';
// import Account from './components/account/Account';
// import ProductDetails from './pages/ProductDetails/ProductDetails';
// import Products from './components/products/Products';
// import ProductDetail from './components/products/ProductDetail';



// function App() {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/bedsheets" element={<Bed />} />
//         <Route path='/account' element={<Account/>}/>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Products/>} />
//         <Route path="/product/:id" element={<ProductDetail/>} />
        
//       </Routes>
//     </Router>
    
//     </>
//   );
// }

// export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bed from './pages/bedsheets/Bed';
import Login from './components/login/Login';
import Account from './components/account/Account';
import Products from './components/products/Products';
import ProductDetail from './pages/singleProduct/ProductDetail';
import ProductDetails from './pages/singleProduct/ProductDetails';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bedsheets" element={<Bed />} />
        <Route path='/account' element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path='/p' element={<ProductDetails/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
