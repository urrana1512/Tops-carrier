import React, { useEffect, useState } from "react";
import AHeader from "./component/AHeader";
import AFooter from "./component/AFooter";
import axios from "axios";

function Dashbord() {
  useEffect(() => {
    select_user();
  }, []);

  const [users_data, setUsers_data] = useState([]);

  const select_user = async () => {
    const res = await axios.get(`http://localhost:5000/getdata`);
    setUsers_data(res.data);
  };
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:5000/deletedata3/${id}`);
    console.log(res);
    select_user();
  };

  const [formvalue, setFormvalue] = useState({
    Name: "",
    DOB: "",
    City: "",
    Job_domain: "",
    Age: "",
  });

  const editHandel = async (id) => {
    const res = await axios.get(`http://localhost:5000/getsingle/${id}`);
    setFormvalue(res.data);
    console.log(res.data);
  };

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
  const submitHandel = async (e) => {
    e.preventDefault();
    // console.log(formvalue.id);
    const res = await axios.put(
      `http://localhost:5000/putdata/${formvalue._id}`,
      formvalue,
    );
    console.log(res);
    select_user();
  };

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
                  <th>DOB</th>
                  <th>City</th>
                  <th>Job Domain</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users_data.map((item, index, arr) => {
                  return (
                    <tr key={index}>
                      <td>{item._id}</td>
                      <td>{item.Name}</td>
                      <td>{item.DOB}</td>
                      <td>{item.City}</td>
                      <td>{item.Job_domain}</td>
                      <td>{item.Age}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target={`#myModal${item._id}`}
                          onClick={() => editHandel(item._id)}
                        >
                          Edit
                        </button>
                        <div className="modal" id={`myModal${item._id}`}>
                          <div className="modal-dialog">
                            <div className="modal-content">
                              {/* Modal Header */}
                              <div className="modal-header">
                                <h4 className="modal-title">Edit User</h4>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                />
                              </div>
                              {/* Modal body */}
                              <div className="modal-body">
                                <div className="container mt-3">
                                  <form
                                    action=""
                                    method="post"
                                    onSubmit={submitHandel}
                                  >
                                    <div className="mb-3 mt-3">
                                      <label htmlFor="email">Name:</label>
                                      <input
                                        type="name"
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

                                    <button
                                      type="submit"
                                      data-bs-dismiss="modal"
                                      className="btn btn-primary"
                                    >
                                      Submit
                                    </button>
                                  </form>
                                </div>
                              </div>
                              {/* Modal footer */}
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          className="btn btn-danger"
                          onClick={() => deleteHandel(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AFooter />
    </>
  );
}

export default Dashbord;
