import React, { useEffect, useState } from 'react'
import Func_lifeimg from './Func_lifeimg'

function Func_life() {

    var [data, setData] = useState({
        isImage: false,
        number:1
    })

    useEffect(() => {
        console.log('Component DidUpdate/Update')
    }, [data.number]);

    return (
        <div className='container mt-5'>

            <h1>Hi i am Function component with LifeCycle</h1>
            <button onClick={() => setData({ ...data, isImage: !data.isImage })}>Hide/show</button>
            <hr />

            {
                data.isImage ? <Func_lifeimg /> : null
            }

            <hr />
            <button onClick={() => setData({ ...data, number:data.number+1 })}>plus</button>
            <h1>{data.number}</h1>


        </div>
    )
}

export default Func_life