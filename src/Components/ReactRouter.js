import React from 'react'
// import { NavLink } from 'react-router-dom'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Errorpage from './Errorpage'

export default function ReactRouter() {
    return (

        <>
        <h1>hi</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact/:name' element={<Contact />} />
                    <Route path='*' element={<Errorpage />} />
                </Routes>

            </BrowserRouter>


        </>

    )
}
