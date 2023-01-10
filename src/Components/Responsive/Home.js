import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, NavLink, Redirect, Route, Routes, Switch } from 'react-router-dom';
import Common from './Common';

export default function Home() {
  return (
    <>
      <div className="home">

        <Common name="This is my first multipage React website" visit="/service" btnname="Go to service page" />
        <img src="../images/xyz.jpg" alt="grfgrg" />
      </div>
    </>
  )
}
