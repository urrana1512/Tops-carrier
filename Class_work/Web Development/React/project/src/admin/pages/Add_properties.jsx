import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import swal from 'sweetalert'; 

function Add_properties() {

    useEffect(() => {
        getData();
    }, []);

    const [categories, setCategories] = useState([]);

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setCategories(res.data);
    }

    const [formdata, setFormdata] = useState({
        id: "",
        cate_id: "",
        prop_name: "",
        bedroom: "",
        bathroom: "",
        floor: "",
        prop_area: "",
        price: "",
        prop_image: ""
    });

    const changeHandel = (e) => {
        setFormdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formdata);
    }

    function validation() {
        let ans = true;
        if (formdata.cate_id == "") {
            toast.error('Category Name Field is required');
            return false;
            ans = false;
        }
        if (formdata.prop_name == "") {
            toast.error('Product Name Field is required');
            return false;
            ans = false;
        }
        if (formdata.bedroom == "") {
            toast.error('Bedroom Field is required');
            return false;
            ans = false;
        }
        if (formdata.bathroom == "") {
            toast.error('bathroom Field is required');
            return false;
            ans = false;
        }
         if (formdata.floor == "") {
            toast.error('Floor Field is required');
            return false;
            ans = false;
        }
         if (formdata.prop_area == "") {
            toast.error('Area Field is required');
            return false;
            ans = false;
        }
         if (formdata.price == "") {
            toast.error('Price Field is required');
            return false;
            ans = false;
        }
         if (formdata.prop_image == "") {
            toast.error('Image Field is required');
            return false;
            ans = false;
        }

        return ans;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/properties`, formdata);
            console.log(res);
            swal("Good job!", "Property added Success!", "success");
            setFormdata({ ...formdata, cate_id: "", prop_name: "", bedroom: "", bathroom: "", floor: "", prop_area: "", price: "", prop_image: "" });
        }
    }
    return (
        <div>


            <div className="featured section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h6>| Properties</h6>
                                <h2>Add Properties</h2>
                            </div>

                            <div className="container mt-3">

                                <form method="post" onSubmit={submitHandel}>
                                    <div className="form-floating mb-3 mt-3">
                                        <select onChange={changeHandel} className="form-control" name="cate_id">
                                            <option value="">Select Categories Name</option>
                                            {
                                                categories.map((value) => {
                                                    return (
                                                        <option value={value.id}>{value.cate_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <label htmlFor="email">Select Categories Name</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" onChange={changeHandel} value={formdata.prop_name} className="form-control" placeholder="Enter Properies Name" name="prop_name" />
                                        <label htmlFor="email">Properies Name</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.bedroom} className="form-control" placeholder="Enter No of bedroom" name="bedroom" />
                                        <label htmlFor="email">No of Bedroom</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.bathroom} className="form-control" placeholder="Enter No of bathroom" name="bathroom" />
                                        <label htmlFor="email">No of Bathroom	</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.floor} className="form-control" placeholder="Enter No of floor" name="floor" />
                                        <label htmlFor="email">No of Floor		</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" onChange={changeHandel} value={formdata.prop_area} className="form-control" placeholder="Enter Properies Area" name="prop_area" />
                                        <label htmlFor="email">Properies Area</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.price} className="form-control" placeholder="Enter Properies Price" name="price" />
                                        <label htmlFor="email">Properies Price</label>
                                    </div>
                                    <div className="form-floating mt-3 mb-3">
                                        <input type="url" onChange={changeHandel} value={formdata.prop_image} className="form-control" id="pwd" placeholder="Enter Propertyies image url" name="prop_image" />
                                        <label htmlFor="pwd">Properties URL</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add_properties