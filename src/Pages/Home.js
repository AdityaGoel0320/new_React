import React from 'react'
import ProductCom from './ProductCom'

export default function Home() {
  return (
    <>
      <div className="home_cont">

        <div className="home_desc">
          <h6 className='h6'>Are you Hungry ?</h6>
          <h1 className='h1'>Dont wait to Order.</h1>
          <button className='order_btn'>Order Now <i class="fa-solid fa-angle-down"></i></button>
        </div>

        <div >
          <img className="home_img" src="/images/pizzamain.jpg" alt="" />
        </div>

      </div>

      <div className="">

        <ProductCom />
      </div>
    </>
  )
}
