import React from 'react'

//external css import
import './style.css';


function CSS() {


  var internal={backgroundColor:'green',color:'pink'}

  return (
    <div>
        <h1 style={{backgroundColor:'red',color:'yellow'}}>Hi inline css</h1>

        <h1 style={internal}>Hi Internal css</h1>

        <h1 className='boxa'>External BOX CSS</h1>
    </div>
  )
}

export default CSS