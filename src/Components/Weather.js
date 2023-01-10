import React, { useEffect, useState } from 'react'

export default function Weather() {
    const [city, setcity] = useState(null)
    const [search, setsearch] = useState("mumbai")

    const [x, setx] = useState("ex")


    let onchangefnc = (e) => {
        setsearch(e.target.value);
    }



    useEffect(() => {

        const fnc = async () => {

            let response = await fetch("https://api.covid19api.com/countries")

            let responsejson = await response.json();


            console.log(responsejson);
            console.log(responsejson[100]);

            setcity(responsejson[100].Country)

        }

        fnc();


    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputdata">
                    <input className='inputfield' onChange={onchangefnc} type="search" />
                </div>


                <div className="info">
                    <h1>{search}</h1>

                    <h1 className="temp">{city}</h1>

                    <h1 className="tempmax_min">{x} </h1>

                </div>
            </div>
        </>
    )
}
