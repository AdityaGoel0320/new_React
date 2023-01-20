import './style/pages.css';



// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'



import { BrowserRouter, Link, Redirect, Route, Routes, Switch } from 'react-router-dom';


// import Todo from './Components/Todo';
// import IncDec from './Components/IncDec';
// import Todolistsecond from './Components/Todolistsecond';
// import Accordian from './Components/Accordian';
// import Input from './Components/Input';
// import Advanceinput from './Components/Advanceinput';
// import GoogleKeepFinal from './Components/GoogleKeepFinal';
// import TabChanger from './Components/TabChanger';
// import ReactRouter from './Components/ReactRouter';
// import Search from './Components/Search';
// // import Home from './Components/Responsive/Home';
// import Contact from './Components/Responsive/Contact';
// import Service from './Components/Responsive/Service';
// import About from './Components/Responsive/About';
// // import Navbar from './Components/Responsive/Navbar';
// import Errorpage from './Components/Errorpage';
// import Footer from './Components/Responsive/Footer';
// // import Main from './Components/Responsive/Main';
// import Weather from './Components/Weather';
// import UpdatedTodoList from './Components/UpdatedTodoList';
// import Menu from './Components/Menu';
// import Revise from './Components/Revise';
// import AdvanceMenu from './Components/AdvanceMenu';
// import Menubtn from './Components/Menubtn';
// import ResponsiveNavbar from './Components/ResponsiveNavbar';

// import Navbar from './Components/6_pack_programmer/First/Navbar';
// import Main from './Components/6_pack_programmer/First/Main';
// import Home from './Components/Home';
import Home from './Pages/Home';
import Navigation from './Pages/Navigation';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';
import Footer from './Pages/Footer';







function App() {
  return (

    <>
      {/* BSIC SE KUCH CONCEPT SEEKHE */}
      {/* <IncDec/> */}
      {/* <Accordian/> */}
      {/* <TabChanger /> */}
      {/* <Search/> */}




      {/* INPUT TAGS SE DATA RETRIVE KARNA PROPERLY */}
      {/* <Todo /> */}
      {/* <Input/> */}
      {/* <Advanceinput/> */}




      {/* INPUT TAGA KA BEST FINAL PRODUT */}
      {/* <GoogleKeepFinal/>  */}




      {/* API KA USE IN REACJS */}
      {/* <Weather /> */}






      {/* NOW WE ARE MAKING A RESPONSIVE WEBSITE ON REACT WHICH HAS NAVABR AND MULTI PAGE SO BELOW ARE FOR THIS WEBPAAGE . */}
      {/* <Main /> */}





      {/* <Menu/> */}

      {/* RESPONSIVE NAVBAR */}
      {/* <ResponsiveNavbar /> */}




      {/* <Main /> */}


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
