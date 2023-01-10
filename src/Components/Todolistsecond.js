import React, { useState } from 'react'

export default function Todolistsecond() {

  let style = {
    backgroundColor  : "red"  ,
    TextTrack
  }
  const [value, setvalue] = useState()


  let onchange = (e) => {
    setvalue(e.target.value);


  }

  let onclick = (e) => {
    console.log("hi");
  }


  let onclick2 = (e) => {
    setvalue( <li style = {style} >hi</li> ) ;
  }
  return (
    <div>



      <input type="text" name="" id="" value={value} onChange={onchange} />
      <button onClick={onclick}>+</button>


      <h1>{value} <span><button onClick={onclick2}>-</button></span></h1>

    </div>



  )
}
