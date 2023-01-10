import React, { useState } from 'react'

import Todolist from './Todolist'


export default function Todo() {

  const [value, setvalue] = useState("")

  const [arr, setarr] = useState([])


  let onchange = (event) => {
    setvalue(event.target.value)
  }


  let onclick = () => {
    setarr((oldarr) => {
      return [...oldarr,   value]
    })

    setvalue("");

  }




  let deleteitem = (id) => {
    setarr((oldarr) => {
      return oldarr.filter((arrelem, index) => {
        return index !== id;

      })
    })

  }
  return (
    <div className='maindiv'>
      <div className="centerdiv">


        <br />
        <h1>Todo List</h1>
        <hr />
        <br />

        
        <div className="top">
          <input  type="text" placeholder='Type your item' value={value} onChange={onchange} />

          <button onClick={onclick}> + </button>

        </div>
        <ol>

           {arr.map((arrvalue, index) => {
            return <Todolist id={index} key={index} text={arrvalue} onSelect={deleteitem} />
          })}

         

          {/* {arr} */}
        </ol>
      </div>
    </div>
  )

}
