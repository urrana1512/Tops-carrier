import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert'; 

function Manage_categories() {

    const redirect = useNavigate();
    useEffect(() => {
        getData();
    }, []);

    const [categories, setCategories] = useState([]);

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setCategories(res.data);
    }

    const deleteData = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        toast.success('Data Deleted Success');
        getData();
    }

   

    
    const [formdata, setFormdata] = useState({
        id: "",
        cate_name: "",
        cate_image: ""
    });

     const editcate = async (id) => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        setFormdata(res.data);
    }

    const changeHandel = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
        console.log(formdata);
    }

    function validation() {
        let ans = true;
        if (formdata.cate_name == "") {
            toast.error('Category Name Field is required');
            ans = false;
        }
        if (formdata.cate_image == "") {
            toast.error('Category Image URL Field is required');
            ans = false;
        }

        return ans;
    }


    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/categories/${formdata.id}`, formdata);
            swal("Good job!", "Category updated Success!", "success");
            getData();
        }

    }



    return (
        <div className="featured section">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h6>| Categories</h6>
                            <h2>Manage Categories</h2>
                        </div>

                        <div className="container mt-3">

                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Categories Name</th>
                                        <th>Categories IMAGE</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        categories.map((value, index, entarr) => {

                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.cate_name}</td>
                                                    <td><img style={{ width: "100px" }} src={value.cate_image} alt="" /></td>
                                                    <td className='text-center'>
                                                        <button onClick={() => deleteData(value.id)} className='btn btn-danger me-1'>Delete</button>
                                                        <button data-bs-toggle="modal" onClick={()=>editcate(value.id)} data-bs-target="#myModal" className='btn btn-primary me-1'>Edit</button>

                                                        <div className="modal" id="myModal">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    {/* Modal Header */}
                                                                    <div className="modal-header">
                                                                        <h4 className="modal-title">Edit Categories</h4>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                                    </div>
                                                                    {/* Modal body */}
                                                                    <div className="modal-body">
                                                                        <div className="container mt-3">

                                                                            <form method="post" >
                                                                                <div className="form-floating mb-3 mt-3">
                                                                                    <input type="text" onChange={changeHandel} value={formdata.cate_name} className="form-control" placeholder="Enter Categories Name" name="cate_name" />
                                                                                    <label htmlFor="email">Categories Name</label>
                                                                                </div>
                                                                                <div className="form-floating mt-3 mb-3">
                                                                                    <input type="url" onChange={changeHandel} value={formdata.cate_image} className="form-control" id="pwd" placeholder="Enter Categories image url" name="cate_image" />
                                                                                    <label htmlFor="pwd">Categories URL</label>
                                                                                </div>
                                                                                <button type="submit" onClick={submitHandel} data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                    {/* Modal footer */}
                                                                    <div className="modal-footer">
                                                                       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

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

export default Manage_categories