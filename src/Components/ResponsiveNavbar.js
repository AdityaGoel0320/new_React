import React from 'react'

export default function ResponsiveNavbar() {

    let fnc = () => {
        console.log("hi you have clicked ham");

        let x = document.getElementById("link")
        let y = document.getElementById("ul_2")
        
        x.classList.toggle("toggle") ;
        y.classList.toggle("toggle") ;
    }
    return (
        <>
            <div>
                <nav className='nav'>
                    <ul className='ul'>
                        <li>Aditya Goel</li>
                        <ul className='ul_2' id='ul_2'>
                            <li>Home </li>
                            <li>Home </li>
                            <li>Home </li>
                            <li>Home </li>

                        </ul>
                        <li className='link' id='link'>Links</li>
                    </ul>



                </nav>
            </div>

            <div className="ham" onClick={fnc}>
                🎄
            </div>


            <div className="box">

            </div>


            <h2 className="h2">
                Welcome to home page
            </h2>

        </>


    )
}
