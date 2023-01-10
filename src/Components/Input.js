import React, { useState } from 'react'

export default function Input() {
    const [val1, setval1] = useState()
    const [val2, setval2] = useState()
    const [text, settext] = useState()
    const [arr, setarr] = useState([])

    let onchange1 = (e) => {

        setval1(e.target.value)
    }
    let onchage2 = (e) => {

        setval2(e.target.value)
    }


    // yeh wala best for jab ek hi input ho
    let onclick = ()=>{
        settext(`${val1} , ${val2}`)
    }


    // yeh wala jab hame array me direct store karna ho
    // let onclick = ()=>{
    //     setarr((predata)=>{
    //         return [...predata , val1 , val2]
    //     })
    // }

    return (
        <div>
            <input type="text" value={val1} onChange={onchange1} placeholder="first" />
            <input type="text" value={val2} onChange={onchage2} placeholder="second" />

            <button onClick={onclick}>Click me</button>
            {text}

            {/* <h1>
                {arr.map((x)=>{
                    return x ;

                })}
            </h1> */}

        </div>
    )
}
