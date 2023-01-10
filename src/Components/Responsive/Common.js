import React from 'react'

import { BrowserRouter, NavLink, Redirect, Route, Routes, Switch } from 'react-router-dom';
export default function Common(props) {
    return (
        <div>
            <div>
                <div className="main_div">

                    <div className="div">
                        <div>
                            <h1>
                                Hi
                            </h1>
                            <h3>
                                {props.name}
                            </h3>
                            <h3>
                                Made by :- <h2> Aditya Goel</h2>
                            </h3>
                            <button><NavLink className="navlink" to={props.visit}>{props.btnname}</NavLink></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
