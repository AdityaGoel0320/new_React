import React from 'react'
import { BrowserRouter, NavLink, Redirect, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Link from './Links';
import Service from './Service';
import Contact from './Contact';
import About from './About';

export default function Main() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/link' element={<Link />} />
                <Route exact path='/service' element={<Service />} />
            </Routes>
        </div>
    )
}
