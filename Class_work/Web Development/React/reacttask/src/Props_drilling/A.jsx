import React from 'react'
import B from './B'

function A({name,number,setName}) {
    return (
        <div>
            <h1>Hi i am A Component</h1>
            <B name={name} number={number} setName={setName}/>
        </div>
    )
}

export default A