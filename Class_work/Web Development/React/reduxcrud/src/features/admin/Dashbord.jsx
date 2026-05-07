import React, { useEffect, useState } from 'react'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'
import { useDispatch, useSelector } from 'react-redux'
import { delete_user, select_user, update_user } from '../userSlice';

function Dashbord() {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(select_user());
    });
    const { users_data } = useSelector((state) => state.user);

    const deleteHandel = (id) => {
        dispatch(delete_user(id));
        dispatch(select_user());
    }


    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });

    const editHandel = (id) => {
        const edit_data = users_data.filter((value) => { return (value.id == id) });
        setFormvalue(edit_data[0]);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    const submitHandel = (e) => {
        e.preventDefault();
        console.log(formvalue.id);
        dispatch(update_user(formvalue));
        dispatch(select_user());
    }

    return (
        <>
            <AHeader />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Manage User </h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>mobile</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users_data.map((item, index, arr) => {

                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobile}</td>
                                                <td>
                                                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(item.id)}>Edit</button>
                                                    <div className="modal" id="myModal">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                {/* Modal Header */}
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Edit User</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                                </div>
                                                                {/* Modal body */}
                                                                <div className="modal-body">
                                                                    <div className="container mt-3">
                                                                        <form action="" method='post' onSubmit={submitHandel}>
                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="email">Name:</label>
                                                                                <input type="name" onChange={changeHandel} value={formvalue.name} className="form-control" id="name" placeholder="Enter name" name="name" />
                                                                            </div>
                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="email">Email:</label>
                                                                                <input type="email" onChange={changeHandel} className="form-control" value={formvalue.email} id="email" placeholder="Enter email" name="email" />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <label htmlFor="pwd">Password:</label>
                                                                                <input type="password" onChange={changeHandel} className="form-control" value={formvalue.password} id="pwd" placeholder="Enter password" name="password" />
                                                                            </div>
                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="email">Mobile:</label>
                                                                                <input type="number" onChange={changeHandel} className="form-control" value={formvalue.mobile} id="email" placeholder="Enter Mobile" name="mobile" />
                                                                            </div>

                                                                            <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Submit</button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* Modal footer */}
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button className='btn btn-danger' onClick={() => deleteHandel(item.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }



                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
            <AFooter />
        </>
    )
}

export default Dashbord