import React, { useState } from 'react'
import menu from './Menuarr'


export default function AdvanceMenu() {

    const [arr, setarr] = useState(menu)

    let breakfastfnc = (category) => {
        console.log("you clicked brea=kfst");

        let finalmenu = arr.filter((elementofmenu) => {
            return elementofmenu.category === category ; 
        })
        setarr(finalmenu);
    }


    let fnc =()=>{
        setarr(menu) ; 
    }
    return (
        <div>
            <h2 className='h2'>welcome to my menu</h2>
            <button className='btn' onClick={() => breakfastfnc("breakfast")}>breakfast</button>
            <button className='btn'   onClick={() => breakfastfnc("lunch")} >lunch</button>
            <button className='btn'  onClick={() => breakfastfnc("dinner")} >dinner</button>
            <button className='btn'  onClick={() => fnc()} >All</button>

            {
                arr.map((x) => {
                    console.log(x);
                    return (
                        <>
                            <div className="container">

                                <h1>{x.name}</h1>
                                <img src={x.img} alt="" />
                                <h2>{x.price}</h2>
                                <h3>{x.desc}</h3>
                            </div>
                        </>
                    )
                })
            }


        </div>
    )
}
