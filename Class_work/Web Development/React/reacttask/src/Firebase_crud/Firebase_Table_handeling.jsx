import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Firebase_Table_handeling() {


  useEffect(() => {
    getData();
  }, []);

  const [user, setUser] = useState([]);

  /*
  const getData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setProd(data);
      });
  }
 */

  const getData = async() => {
    const res=await axios.get(`https://sweetmart-563b7-default-rtdb.firebaseio.com/users.json`);
    console.log(res.data); 
    setUser(res.data);
  }
  const deleteData = async(uset_id) => {
    const res = await axios.delete(`https://sweetmart-563b7-default-rtdb.firebaseio.com/users/${uset_id}.json`);
    console.log(res.data);
    alert('user Deleted success');  
    getData();
  }

    const [eData,setEdata]=useState({});
    const editData = async(uset_id) => {
    const res = await axios.get(`https://sweetmart-563b7-default-rtdb.firebaseio.com/users/${uset_id}.json`);
    console.log(res.data);
    setEdata(res.data);
  }

  return (
    <div className="container mt-3">
      <h2>Firebaser User Manage</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {

            Object.keys(user).map((value, index, entarr) => {
                const {id,name,email,password}=user[value];
              return (
                <tr>
                  <th>{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>deleteData(value)}>Delete</button>
                    <button className='btn btn-success' onClick={()=>editData(value)}>Edit</button>
                  </td>
                </tr>
              )
            })

          }
        </tbody>
      </table>
    </div>
  )
}

export default Firebase_Table_handeling