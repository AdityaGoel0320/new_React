import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'


import Sample from './Sample'
import IncDec from './IncDec'


export default function Op3() {
    return (
        <>
            <BrowserRouter>
                {/* <Link to="sample">Sample</Link> */}


                <Link to="incDec">IncDec</Link>
            </BrowserRouter>
        </>
    )
}
