import React, { useState } from 'react'

export default function Contact() {
  const [data, setdata] = useState({
    fullname: "",
    email: "",
    phone: "",
    msg: "",
  })

  let onchangefnc = (e) => {
    const { name, value } = e.target;
    setdata((predata) => {
      return {
        ...predata, [name]: value
      }
    })

  }


  let onclickfnc = () => {
    console.log("hi");

  }

  let onsubmitfnc = (e) => {
    e.preventDefault();
    alert(`my data is ${data.fullname} ${data.email}${data.msg}${data.phone}`);
    console.log("hiko");
  }



  return (
    <div className='contact_cont'>


      <form  onSubmit={onsubmitfnc}>
        <h1 className='form_heading'>Contact Info</h1>
        <div className="inner">
          <label for="exampleFormControlInput1" className="">Fullname</label>
          <input type="text" className="" value={data.fullname} name="fullname" onChange={onchangefnc} id="exampleFormControlInput1" placeholder="Enter Full Name" />
        </div>

        <div className="inner">
          <label for="exampleFormControlInput1" className="">phone number</label>
          <input type="number" className="" value={data.phone} name="phone" onChange={onchangefnc} id="exampleFormControlInput1" placeholder="Enter Phone Number" />
        </div>
        <div className="inner">
          <label for="exampleFormControlInput1" className="">email</label>
          <input type="text" className="" value={data.email} name="email" onChange={onchangefnc} id="exampleFormControlInput1" placeholder="Enter Email-ID" />
        </div>

        <div className="inner">
          <label for="exampleFormControlTextarea1" className="">message</label>
          <textarea className="" value={data.msg} name="msg" onChange={onchangefnc} id="exampleFormControlTextarea1" rows="3" placeholder='Wrte your Message here'></textarea>



        </div>

        <button type='submit' onClick={onclickfnc} className="submit_btn">Submit Now</button>
      </form >
    </div>

  )
}
