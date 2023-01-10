import React, { useState } from 'react'

export default function Accordian() {
    const [x, setx] = useState("none")
    const [sign, setsign] = useState("+")

    let onclick = () => {

        let z = x;

        if (z == "none") {
            setx("inline")
            setsign("-");
        }
        else {
            setx("none");
            setsign("+");

        }
    }

    let style = {
        display: x,
    }




    return (
        <>
            <h1>Accordian</h1>
            <button onClick={onclick}>{sign}</button>
            <h3>sample text</h3>
            <p style={style}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aliquid.</p>
        </>
    )
}
