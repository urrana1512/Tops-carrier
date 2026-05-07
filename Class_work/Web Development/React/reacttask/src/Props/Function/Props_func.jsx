/*
Props are arguments passed into React components.

Props are passed to components via HTML attributes.
props stands for properties.


*/

import React from 'react'

function Props_func({img,title,desc}) {
    return (
        <div className='col-md-3'>
            <div className="card" style={{ width: '100%' }}>
                <img className="card-img-top" src={img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">Book Movie</a>
                </div>
            </div>
        </div>
    )
}

export default Props_func