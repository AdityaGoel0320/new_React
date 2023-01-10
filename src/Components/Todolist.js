import React from 'react'

export default function Todolist(props) {

    return (

        <>

            <div className="toostyle">

                <i className="fa-solid fa-trash" onClick={
                    


                    () => {
                        props.onSelect(props.id)
                    }
                }></i>



                <li>{props.text}</li>
            </div>
        </>



    )
}
