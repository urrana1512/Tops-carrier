import React, { Component } from 'react'
import Class_lifeimg from './Class_lifeimg';

export class Class_life extends Component {

    constructor() {
        super();
        this.state = {
            isImage: false
        }
    }

    componentDidUpdate() {
        console.log('Component DidUpdate/Update')
    }
    
    render() {
        return (
            <div className='container mt-5'>

                <h1>Hi i am class component with LifeCycle</h1>
                <button onClick={() => this.setState({ isImage: !this.state.isImage })}>Hide/show</button>
                <hr />

                {
                    this.state.isImage ? <Class_lifeimg /> : null
                }

            </div>
        )
    }
}

export default Class_life