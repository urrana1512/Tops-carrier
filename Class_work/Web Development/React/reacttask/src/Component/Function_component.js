/*

React Components
Components are independent and reusable bits of code. They serve the same purpose as 
JavaScript functions, but work in isolation and return HTML.

Components come in two types, 
1)Class components 
2)Function components,

In older React code bases, you may find Class components primarily used. 
It is now suggested to use Function components along with Hooks, 
which were added in React 16.8. There is an optional section on 
Class components for your reference.

1) Function Component

A Function component also returns HTML, 
and behaves much the same way as a Class component, 
but Function components can be written using much less code, are easier to understand, 
and will be preferred in this tutorial.

*/


//rfce

/*
import React from 'react'

function Function_component() {
  return (
    <div>Function_component</div>
  )
}

export default Function_component
*/


//rfc
import React from 'react'
export default function Function_component() {
  return (
    <div>
        <h1>Function_component</h1>
    </div>
  )
}
