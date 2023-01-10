import React from 'react'
import { BrowserRouter, NavLink, Redirect, Route, Routes, Switch } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            < nav className="nav" >
                <ul className="ul">
                    <li className="li">
                        <NavLink className="navlink" aria-current="page" to="/ ">Home</NavLink>
                    </li>
                    <li className="li">
                        <NavLink className="navlink" to="/about">About</NavLink>
                    </li>

                    <li className="li">
                        <NavLink className="navlink" to="/service">Services</NavLink>
                    </li>

                    <li className="li">
                        <NavLink className="navlink" to="/contact">Contact</NavLink>
                    </li>

                </ul>
            </nav>
        </>
    )
}