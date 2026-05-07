import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import swal from 'sweetalert'; 

function Manage_customer() {
    useEffect(() => {
        getData();
    }, []);

    const [users, setUsers] = useState([]);

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/user`);
        console.log(res.data);
        setUsers(res.data);
    }

    const deleteData = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        toast.success('Data Deleted Success');
        getData();
    }

    const statushange = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data.status);
        if(res.data.status=="Unblock")
        {
            const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"Block"});
            swal("Good job!", "User Blocked Success!", "success");
            getData();
        }
        else
        {
            const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"Unblock"});
            swal("Good job!", "User Unblock Success!", "success");
            getData();
        }
    }
    
    return (
        <div className="featured section">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h6>| Customer</h6>
                            <h2>Manage Customer</h2>
                        </div>

                        <div className="container mt-3">

                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        users.map((value, index, entarr) => {

                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.mobile}</td>
                                                    <td className='text-center'>
                                                        <button onClick={() => deleteData(value.id)} className='btn btn-danger me-1'>Delete</button>
                                                        <button className='btn btn-primary me-1'>Edit</button>
                                                        <button className='btn btn-success me-1' onClick={() => statushange(value.id)}>{value.status}</button>
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
            </div>
        </div>

    )
}

export default Manage_customer