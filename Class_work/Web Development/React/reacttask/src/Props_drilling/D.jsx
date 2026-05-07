import React from 'react'

function D({name,number,setName}) {
  return (
    <div>
        <h1>Hi i am D Component : {name}</h1>
        <h1>{number}</h1>
        <button onClick={()=>setName("pATEL AKASH")}>Change D</button>
    </div>
  )
}

export default D