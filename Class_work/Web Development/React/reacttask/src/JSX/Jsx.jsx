
/*

JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any 
createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.


*/


import React from 'react'

import './mystyle.css';


function Jsx() {

    var name = "Raj Nagar";
    const myelement = <h1>I Love JSX!</h1>;
    const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>;
    const myelement2 = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    );


    const mystyle={color: 'pink', backgroundColor: 'red'}


    return (
        <div>
            
            <h1>Jsx</h1>

            <h1>{name}</h1>
            <h1>{myelement}</h1>
            <h1>{myelement1}</h1>
            {myelement2}

            <h1 style={{color: 'red', backgroundColor: 'yellow'}}>Hi i am React Inline Style</h1>

            <h1 style={mystyle}>Hello i am internal css</h1>

            <h1 className='box'>Hello i am External css</h1>
            <button class="button">Button</button>


        </div>
    )
}

export default Jsx