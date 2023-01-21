import React  ,  {useState} from 'react'
import { BrowserRouter, Link, Redirect, Route, Routes, Switch } from 'react-router-dom';

export default function Navigation() {
    const [value, setvalue] = useState()
    
    return (
        <>
            <div className="navbox">

                <nav className="nav">
                    <Link to="/">
                        <img className='logo' src="/images/aloo.jpg" alt="this is my logo" />
                    </Link>

                    <ul className='ul'>
                        <li className='li'><Link to='/'>Home</Link></li>
                        <li className='li'><Link to='/products'>Products</Link></li>
                        <li className='li'>
                            <Link to='/cart'>
                                <div className='cart_btn'>
                                    <span className='cart_value'>{value}</span>
                                    <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                                </div>

                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
