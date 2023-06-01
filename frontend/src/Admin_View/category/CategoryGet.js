import { Link } from "react-router-dom";
import "../category/CategoryGet.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar';
import AdminLogin from '../AdminLogin/AdminLogin'
import Scrollbars from "react-custom-scrollbars";
const CategoryGet = (props) => {
  const [category, setCategory] = useState([]);

  const CategoryAPI = "http://localhost:1234/category/getallcategory";
  const CategoryDeleteAPI ="http://localhost:1234/category/deletecategorybyid/";

  useEffect(() => {
    axios.get(CategoryAPI).then((res) => {
      setCategory(res.data);
    });
  }, []);

  function DeleteCategory(id) {
    axios.delete(CategoryDeleteAPI + String(id)).then((res) => {
      alert("Data Deleted");
      window.location.reload(true);
    });
  }

  return (
    <>
    {props.adminstatus ?(
    <>
    <><Navbar adminstatus = {props.adminstatus} fun ={props.adminfun} /></>
      <section className="intro">
        <div className="gradient-custom-2 h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
            <Scrollbars style={{ width:"100%", height: 600 }}> 
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-dark table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Category Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Image</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.map((obj) => (
                          <tr>
                            <th scope="row">{obj.name}</th>
                            <td>{obj.des}</td>
                            <td><img  class ="img2"src={obj.url} alt={obj.name} /></td>

                            <td>
                              <Link
                                to={"/category/update/" + obj._id}
                                className="btn btn-primary a-btn-slide-text"
                              >
                                <span
                                  className="glyphicon glyphicon-edit"
                                  aria-hidden="true"
                                ></span>
                                <span>
                                  <strong>Edit</strong>
                                </span>
                              </Link>
                            </td>
                            <td>
                              <Link
                                onClick={() => DeleteCategory(obj._id)}
                                className="btn btn-primary a-btn-slide-text"
                              >
                                <span
                                  className="glyphicon glyphicon-remove"
                                  aria-hidden="true"
                                ></span>
                                <span>
                                  <strong>Delete</strong>
                                </span>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </Scrollbars>
            </div>
           
          </div>
        </div>
      </section>
    </>
    ):(<Link to={"/adminlogin"} className="btn btn-primary a-btn-slide-text">
    <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
    <span><strong>Login to View</strong></span>            
    </Link>)}
    </>
  );
};

export default CategoryGet;
