import React from 'react'

export default function Menucard(props) {
    return (
        <div>
            <div className="container">

                <h1>{props.name}</h1>
                <img src={props.img} alt="" />
                <h2>{props.price}</h2>
                <h3>{props.desc}</h3>
            </div>
        </div>
    )
}
