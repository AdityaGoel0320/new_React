import React from 'react'
import { useState } from 'react'
export default function Search() {

    const [value, setvalue] = useState()

    let imglink = `https://source.unsplash.com/500x500/?${value}`



    let fnc = (e) => {
        setvalue(e.target.value)
        console.log(value);
    }
    return (
        <div>
            <input type="text" value={value} onChange={fnc} placeholder='Search anything' />
            {
                value =="" ? null:
                    <img src={imglink} alt="hello" />
            }
        </div>
    )
}
