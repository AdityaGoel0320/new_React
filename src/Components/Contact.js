import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

export default function Contact() {
    let {name} = useParams();
    return (

        <>

            <Navbar/>
            <div>Contact {name}</div>
        </>
    )
}
