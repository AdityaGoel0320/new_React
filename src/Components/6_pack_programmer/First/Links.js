import React from 'react'
import { BrowserRouter, li, Redirect, Route, Routes, Switch } from 'react-router-dom';

export default function Brands() {
  return (
    <>
      <div className="links">
        <div className='links_content'>
          <h1 className='links_h1'>hi ✌</h1>
          <h2 className='links_h2'>I am a frontend developer currently learning <strong>Reactjs </strong>
            These are my links , I would happy to interact with you</h2>
        </div>



        <ul className='links_ul'>
          <li className='links_li'><i class="fa-brands fa-linkedin-in"></i></li>

          <li className='links_li'>
           <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li className='links_li'>
            <i class="fa-brands fa-twitter"></i>

          </li>


        </ul>


      </div>
    </>
  )
}
