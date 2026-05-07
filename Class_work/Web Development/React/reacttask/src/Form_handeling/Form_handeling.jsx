import React, { useState } from 'react'

function Form_handeling() {

    const [formvalue, setFormhandel] = useState({
        id:"",
        name: "",
        email: "",
        password: ""
    })

    const changeHandel = (e) => {
        setFormhandel({ ...formvalue,id:new Date().getTime().toString(),[e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const [data, setData] = useState([]);
    const submitHandel = (e) => {
        e.preventDefault();
        setData([...data,formvalue]);
         setFormhandel({ ...formvalue,name:"",email:"",password:"" });
    }

    const deleteHandel = (id) => {
        var filterdata= data.filter((value,index,arr)=> { return value.id!=id});
        setData(filterdata);
    }



    return (
        <div>
            <div className="container mt-3">
                <h2>User Register</h2>
                <form action="" onSubmit={submitHandel}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="text">Name:</label>
                        <input type="text" onChange={changeHandel} value={formvalue.name} className="form-control" id="text" placeholder="Enter Name" name="name" />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" onChange={changeHandel} value={formvalue.email} className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" onChange={changeHandel} value={formvalue.password} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className="container mt-3">
                <h2>User Manage</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>    
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, index, entarr) => {

                                return (
                                    <tr>
                                        <th>{value.id}</th>      
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.password}</td>
                                        <td>
                                            <button onClick={()=>deleteHandel(value.id)} className='btn btn-danger'>Delete{value.id}</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Form_handeling