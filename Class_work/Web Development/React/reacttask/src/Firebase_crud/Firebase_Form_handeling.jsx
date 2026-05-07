import axios from 'axios';
import React, { useState } from 'react'

function Firebase_Form_handeling() {

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
    const submitHandel = async(e) => {
        e.preventDefault();
        const res=await axios.post(`https://sweetmart-563b7-default-rtdb.firebaseio.com/users.json`,formvalue)
        console.log(res);
        alert('user added success');    
        setFormhandel({ ...formvalue,name:"",email:"",password:"" });
    }

    const deleteHandel = (id) => {
        var filterdata= data.filter((value,index,arr)=> { return value.id!=id});
        setData(filterdata);
    }



    return (
        <div>  
            <div className="container mt-3">
                <h2>Firebase Form Register</h2>
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

           

        </div>

    )
}

export default Firebase_Form_handeling