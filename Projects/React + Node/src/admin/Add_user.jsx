import React, { useState } from "react";
import AHeader from "./component/AHeader";
import AFooter from "./component/AFooter";

import axios from "axios";

function Add_user() {
  //const {}=useSelector((state)=>{state.user})

  const [formvalue, setFormvalue] = useState({
    Name: "",
    DOB: "",
    City: "",
    Job_domain: "",
    Age: "",
  });

  const changeHandel = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      status: "Unblock",
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submitHandel = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:5000/postdata2`, formvalue);
    setFormvalue({
      ...formvalue,
      Name: "",
      DOB: "",
      City: "",
      Job_domain: "",
      Age: "",
    });
  };

  return (
    <>
      <AHeader />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <h2>Add Data</h2>
            <div className="container mt-3">
              <form action="" method="post" onSubmit={submitHandel}>
                <div className="mb-3 mt-3">
                  <label htmlFor="email">Name:</label>
                  <input
                    type="text"
                    onChange={changeHandel}
                    value={formvalue.Name}
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    name="Name"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email">DOB:</label>
                  <input
                    type="date"
                    onChange={changeHandel}
                    className="form-control"
                    value={formvalue.DOB}
                    id="email"
                    placeholder="Enter DOB"
                    name="DOB"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd">City:</label>
                  <input
                    type="text"
                    onChange={changeHandel}
                    className="form-control"
                    value={formvalue.City}
                    id="pwd"
                    placeholder="Enter City"
                    name="City"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email">Job Domain:</label>
                  <input
                    type="text"
                    onChange={changeHandel}
                    className="form-control"
                    value={formvalue.Job_domain}
                    id="email"
                    placeholder="Enter Job Domain"
                    name="Job_domain"
                  />
                </div>

                <div className="mb-3 mt-3">
                  <label htmlFor="email">Age:</label>
                  <input
                    type="number"
                    onChange={changeHandel}
                    className="form-control"
                    value={formvalue.Age}
                    id="email"
                    placeholder="Enter Age"
                    name="Age"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AFooter />
    </>
  );
}

export default Add_user;
