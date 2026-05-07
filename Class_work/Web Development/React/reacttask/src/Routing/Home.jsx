import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Navbar />
            <div className='container mt-5 mb-5'>
                <h1 className='text-center'>Home Page</h1>

                <Link to="/">About</Link>
            </div>

        </>
    )
}

export default Home