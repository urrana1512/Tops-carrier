import React, { useState } from 'react'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'
import { useDispatch, useSelector } from 'react-redux';
import { insert_user } from '../userSlice';
function Add_user() {

    //const {}=useSelector((state)=>{state.user})

    const dispatch=useDispatch();

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
    });

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const submitHandel = (e) => {
        e.preventDefault();
        dispatch(insert_user(formvalue));
        setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
    }

    return (
        <>
            <AHeader />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add Data</h2>
                        <div className="container mt-3">
                            <form action="" method='post' onSubmit={submitHandel}>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Name:</label>
                                    <input type="name" onChange={changeHandel} value={formvalue.name} className="form-control" id="name" placeholder="Enter name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={changeHandel}  className="form-control" value={formvalue.email} id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" onChange={changeHandel}  className="form-control" value={formvalue.password} id="pwd" placeholder="Enter password" name="password" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Mobile:</label>
                                    <input type="number" onChange={changeHandel}  className="form-control" value={formvalue.mobile} id="email" placeholder="Enter Mobile" name="mobile" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
            <AFooter />
        </>
    )
}

export default Add_user