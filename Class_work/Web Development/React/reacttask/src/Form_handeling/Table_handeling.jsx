import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Table_handeling() {


  useEffect(() => {
    getData();
  }, []);

  const [prod, setProd] = useState([]);

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
    const res=await axios.get(`https://fakestoreapi.com/products`);
    console.log(res.data);
    setProd(res.data);
  }

  return (
    <div className="container mt-3">
      <h2>User Manage</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Categories</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {

            prod.map((value, index, entarr) => {

              return (
                <tr>
                  <th>{value.id}</th>
                  <td>{value.category}</td>
                  <td>{value.title}</td>
                  <td>{value.price}</td>
                  <td><img src={value.image} width="50px" alt="" /></td>
                  <td>
                    <button className='btn btn-danger'>Delete</button>
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

export default Table_handeling