import React, { useState } from 'react'

export default function IncDec() {
    const [value, setvalue] = useState(0)

    const inc = () => {
        console.log("hi");
        setvalue(value+1);

    }
    const dec = () => {
        console.log("hi");
        if (value - 1 < 0) {
            alert("zero is reached")
        }
        else {

            setvalue(value-1);
        }

    }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
        </div>
    )
}
