import React from 'react'
import { BrowserRouter, NavLink, Redirect, Route, Routes, Switch } from 'react-router-dom';

import Home from './Home';


export default function Navbar() {
    return (
        <div>
            < nav className="nav" >
                <ul className="ul">
                        <NavLink className="navlink" aria-current="page" to="/ ">Home</NavLink>
                        <NavLink className="navlink" to="/contact">Contact</NavLink>
                        <NavLink className="navlink" to="/about">About</NavLink>
                        <NavLink className="navlink" to="/link">Links</NavLink>
                        <NavLink className="navlink" to="/service">Services</NavLink>

                </ul>
            </nav>

        </div>
    )
}
