import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, NavLink, Redirect, Route, Routes, Switch } from 'react-router-dom';

export default function Home() {
  return (
    <>

      <div className="img">
        <img className='home_img' src="../assets/home.jpg" alt="gkfbgrbg" />
      </div>

      <div className='home_box'>
        <div className="home_content">
          <h1 className='home_h1'>Who are We ? </h1>
          <p className='p'> eius quaerat error molestiae tempore! Recusandae, quos. Nisi, atque vel! Voluptate dolorem, exercitationem sint similique perspiciatis ipsam veritatis amet suscipit nemo repellendus cupiditate, vitae repudiandae fugit laudantium fugiat tenetur, a ea? Quas non nam ipsum laboriosam earum delectus necessitatibus doloribus, tempora dolores aliquid cum explicabo. Nobis facere consectetur, qui harum enim aspernatur eaque at, accusantium temporibus, vel dolorum cumque.</p>
        </div>
      </div>



    </>
  )
}
