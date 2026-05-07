import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Manage_properties() {

    useEffect(() => {
        getData();
    }, []);

    const [properties, setProperties] = useState([]);

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/properties`);
        console.log(res.data);
        setProperties(res.data);
    }

      const deleteData = async (id) => {
        const res = await axios.delete(`http://localhost:3000/properties/${id}`);
        console.log(res.data);
        toast.success('Data Deleted Success');
        getData();
    }

    return (
        <div className="featured section">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h6>| Properties</h6>
                            <h2>Manage Properties</h2>
                        </div>

                        <div className="container mt-3">

                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Categories id</th>
                                        <th>Name</th>
                                        <th>Bedroom</th>
                                        <th>Bathroom</th>
                                        <th>Floor</th>
                                        <th>Area</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        
                                        properties.map((value, index, entarr) => {

                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.cate_id}</td>
                                                    <td>{value.prop_name}</td>
                                                    <td>{value.bedroom}</td>    
                                                    <td>{value.bathroom}</td>
                                                    <td>{value.floor}</td>
                                                    <td>{value.prop_area}</td>
                                                    <td>{value.price}</td>
                                                    <td><img style={{ width: "100px" }} src={value.prop_image} alt="" /></td>
                                                    <td className='text-center'>
                                                        <button onClick={()=>deleteData(value.id)} className='btn btn-danger me-1'>Delete</button>
                                                        <button className='btn btn-primary me-1'>Edit</button>
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

export default Manage_properties