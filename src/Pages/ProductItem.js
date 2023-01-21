import React from 'react'
import { BrowserRouter, Link, Redirect, Route, Routes, Switch } from 'react-router-dom';

export default function ProductItem(props) {
    let fnc = () => {
        let btn = document.getElementById("btn")

        btn.classList.toggle("toggleclass")

    }
    return (
        <>



            <div className='item_div'>
                <Link to={`/products/${props.link_id}`}>
                    <img className='item_img' src={props.image} alt="pizza photo" />
                </Link>
                <h2 className='h2'>{props.name}</h2>
                <span className='span'>Size :- {props.size}</span>
                <div className="price_add">
                    <span>{props.price} Rs</span>

                    <button onClick={fnc} id="btn" className='addbtn'>Add</button>
                </div>
            </div>
        </>
    )
}
