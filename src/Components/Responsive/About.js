import React from 'react'
import { BrowserRouter, NavLink, Redirect, Route, Routes, Switch } from 'react-router-dom';
import Common from './Common';

export default function About() {
  return (
    <>
      <Common  name ="Welcome to About page" visit = "/contact" btnname = "Go to Contact Page" />


    </>
  )
}
