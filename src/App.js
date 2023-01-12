// import './style/Header.scss';
import './style/Main.css';
import './style/Home.css';
import './style/Navabr.css';
import './style/Home.css';
import './style/Links.css';
import './style/Contact.css';



// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'



import { BrowserRouter, Link, Redirect, Route, Routes, Switch } from 'react-router-dom';


import Todo from './Components/Todo';
import IncDec from './Components/IncDec';
import Todolistsecond from './Components/Todolistsecond';
import Accordian from './Components/Accordian';
import Input from './Components/Input';
import Advanceinput from './Components/Advanceinput';
import GoogleKeepFinal from './Components/GoogleKeepFinal';
import TabChanger from './Components/TabChanger';
import ReactRouter from './Components/ReactRouter';
import Search from './Components/Search';
// import Home from './Components/Responsive/Home';
import Contact from './Components/Responsive/Contact';
import Service from './Components/Responsive/Service';
import About from './Components/Responsive/About';
// import Navbar from './Components/Responsive/Navbar';
import Errorpage from './Components/Errorpage';
import Footer from './Components/Responsive/Footer';
// import Main from './Components/Responsive/Main';
import Weather from './Components/Weather';
import UpdatedTodoList from './Components/UpdatedTodoList';
import Menu from './Components/Menu';
import Revise from './Components/Revise';
import AdvanceMenu from './Components/AdvanceMenu';
import Menubtn from './Components/Menubtn';
import ResponsiveNavbar from './Components/ResponsiveNavbar';

import Navbar from './Components/6_pack_programmer/First/Navbar';
import Main from './Components/6_pack_programmer/First/Main';







function App() {
  return (

    <>
      {/* <Todo /> */}
      {/* <IncDec/> */}
      {/* <Todolistsecond/> */}
      {/* <Accordian/> */}
      {/* <Input/> */}
      {/* <Advanceinput/> */}
      {/* <GoogleKeepFinal/>  */}
      {/* <TabChanger /> */}

      {/* <ReactRouter/> */}
      {/* <Search/> */}


      {/* NOW WE ARE MAKING A RESPONSIVE WEBSITE ON REACT WHICH HAS NAVABR AND MULTI PAGE SO BELOW ARE FOR THIS WEBPAAGE . */}

      {/* <Main /> */}

      {/* file is completed */}




      {/* <Weather /> */}
      {/* <UpdatedTodoList/> */}

      {/* <Menu/> */}
      {/* <AdvanceMenu/> */}


      {/* <ResponsiveNavbar /> */}




      <Main />
      {/* <Navbar/> */}







    </>
  );
}

export default App;
