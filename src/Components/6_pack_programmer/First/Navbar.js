import React from 'react'
import { BrowserRouter, NavLink, Redirect, Route, Routes, Switch } from 'react-router-dom';
import Home from './Home';

export default function Navbar() {
  return (
    <div>

        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
        </Routes>

    </div>
  )
}
