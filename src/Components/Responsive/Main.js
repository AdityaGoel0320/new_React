import React from 'react'
import { BrowserRouter, Link, Redirect, Route, Routes, Switch } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import Errorpage from '../Errorpage';
export default function Main() {
    return (
        <div>

            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/service' element={<Service />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='*' element={<Errorpage />} />
            </Routes>

            <Footer />
        </div>

    )
}
