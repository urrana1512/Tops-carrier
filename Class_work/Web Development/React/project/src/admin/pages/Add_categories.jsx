import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import swal from 'sweetalert'; 

function Add_categories() {


    const [formdata, setFormdata] = useState({
        id: "",
        cate_name: "",
        cate_image: ""
    });

    const changeHandel = (e) => {
        setFormdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
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
        if(validation())
        {
            const res = await axios.post(`http://localhost:3000/categories`, formdata);
            swal("Good job!", "Category added Success!", "success");
            setFormdata({ ...formdata, cate_name: "", cate_image: ""});
        }
        
    }

    
    return (
        <div>


            <div className="featured section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h6>| Categories</h6>
                                <h2>Add Categories</h2>
                            </div>

                            <div className="container mt-3">

                                <form method="post" onSubmit={submitHandel}>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" onChange={changeHandel} value={formdata.cate_name} className="form-control"  placeholder="Enter Categories Name" name="cate_name" />
                                        <label htmlFor="email">Categories Name</label>
                                    </div>
                                    <div className="form-floating mt-3 mb-3">
                                        <input type="url" onChange={changeHandel} value={formdata.cate_image} className="form-control" id="pwd" placeholder="Enter Categories image url" name="cate_image" />
                                        <label htmlFor="pwd">Categories URL</label>
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

export default Add_categories