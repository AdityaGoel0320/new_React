import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Navbar from './Navbar'


export default function Home() {
    let x= useNavigate(); 

    let fnc=()=>{
        x("/about")


    } 
    return (
        <>



            <Navbar />


            <div>Home Page</div>
            <button onClick={fnc}>click me to go about page</button>

        </>

    )
}
