import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NavLink class="nav-link" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/about">About</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar