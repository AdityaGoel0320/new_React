import React, { useState } from 'react'
import menu from './Menuarr'
import Menucard from './Menucard';


export default function Menu() {

    const [arr, setarr] = useState(menu)

    let breakfastfnc = (category) => {
        console.log("you clicked brea=kfst");

        let finalmenu = arr.filter((elementofmenu) => {
            return elementofmenu.category === category;
        })
        setarr(finalmenu);
    }


    let fnc = () => {
        setarr(menu);
    }
    return (
        <div>
            <h2 className='h2'>welcome to my menu</h2>
            <button className='btn' onClick={() => breakfastfnc("breakfast")}>breakfast</button>
            <button className='btn' onClick={() => breakfastfnc("lunch")} >lunch</button>
            <button className='btn' onClick={() => breakfastfnc("dinner")} >dinner</button>
            <button className='btn' onClick={() => fnc()} >All</button>

            {
                arr.map((x) => {
                    console.log(x);
                    return (
                        <>
                        <Menucard name={x.name} img={x.img} price={x.price} desc={x.desc}/>
                        </>
                    )
                })
            }


        </div>
    )
}
