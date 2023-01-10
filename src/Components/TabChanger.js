import React , {useEffect, useState} from 'react'

export default function TabChanger() {
    const [x, setx] = useState(0)

    useEffect(()=>{
        document.title  = `you clicked btn ${x} times`
    })
  return (
    <div>
        <button onClick={()=>{setx(x+1)}}>Click me {x}</button>
    </div>
  )
}
