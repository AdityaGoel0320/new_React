import React from 'react'

export default function Buttongrp(props) {
    let x = new Set(props.arr)
    console.log( " x ki "  +  x.category);
    return (
        <div>
            <button className='btn' onClick={() => props.breakfastfnc("breakfast")}>breakfast</button>
            <button className='btn' onClick={() => props.breakfastfnc("lunch")} >lunch</button>
            <button className='btn' onClick={() => props.breakfastfnc("dinner")} >dinner</button>
            <button className='btn' onClick={() => props.fnc()} >All</button>
        </div>
    )
}
