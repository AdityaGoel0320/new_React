import './style/pages.css';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


import { BrowserRouter, Link, Redirect, Route, Routes, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Navigation from './Pages/Navigation';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';
import Footer from './Pages/Footer';







function App() {
  return (

    <>
      <div className='codingGyanProject'>
          <Navigation />

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/products' element={<Products />} />
            <Route exact path='/products/:_id' element={<SingleProduct />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>

          <Footer />

      </div>



    </>
  );
}

export default App;
