import React, { useState } from 'react'

export default function Revise() {
  const [x, setx] = useState()

  let fnc = (e) => {
    setx(e.target.value)

    console.log(e.target.value)
  }

  return (
    <div>
      <input value={x} type="text" placeholder='Enter text' />

      <button onClick={fnc}>
        click me


      </button>
    </div>
  )
}
