import React from 'react'

export default function Note(props) {
  let deletenote = () => {
    props.deleteitem(props.id);
  }
  return (
    <>
        <div className="note_box">
          <h2 className='note_heading'>{props.title}</h2>
          <p className='note_p'> {props.content} </p>
          <button className='deletebtn' onClick={deletenote}>
            <i class="fa-solid fa-trash"></i>
          </button>

        </div>

    </>



  )
}
