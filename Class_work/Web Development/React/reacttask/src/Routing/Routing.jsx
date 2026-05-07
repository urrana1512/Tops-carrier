/*
Create React App doesn't include page routing.

React Router is the most popular solution.

Add React Router
To add React Router in your application, run this in the terminal from the root directory 
of the application:

npm i -D react-router-dom 

*/


import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<><Home /></>}></Route>
                    <Route path="/about" element={<><About /></>}></Route>
                    <Route path="/contact" element={<><Contact /></>}></Route>
                </Routes>
            </BrowserRouter>



        </div>
    )
}

export default Routing