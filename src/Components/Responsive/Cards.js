import React from 'react'
import { BrowserRouter, NavLink, Redirect, Route, Routes, Switch } from 'react-router-dom';

export default function Cards(props) {
  return (
    <div>
            <div className="" >
                <img src={props.img} className="" alt="..ggr."/>
                    <div className="">
                        <h5 className="">{props.title}</h5>
                        <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="">Go somewhere</NavLink>
                    </div>
            </div>
    </div>
  )
}
