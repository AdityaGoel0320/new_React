import React from 'react'
import Cards from './Cards';
export default function Service() {
  let arr = [
    { title: "15415454"   }, { title: "igrg1154gtfhie" }, { title: "ifhtghthytythie" }, { title: "ifh564545ie" }, { title: "ifggggghie" }, { title: "i4556456fhie" },
  ]
  return (
    <div>
      Service

      now cards are :-

      {
        arr.map((val, index) => {
          return <Cards key={index} title={val.title}  />
        })
      }
    </div>
  )
}
