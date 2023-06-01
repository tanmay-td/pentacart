import "../brand/BrandGet.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState, } from "react";
import axios from "axios";

import Navbar from '../Navbar';

const BrandUpdate = (props) => {
  const { id } = useParams();

  const [brandlist, setBrand] = useState([]);


  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [url, setUrl] = useState();
  


  const listBrandAPI = "http://localhost:1234/brand/getbrandbyid/" + String(id);
  const updateBrandAPI ="http://localhost:1234/brand/updatebrandbyid/" + String(id);

  useEffect(() => {
    axios.get(listBrandAPI).then((res) => {
      setBrand(res.data);
    });
  }, []);

 

  function updateBrand() {
    let sendObj = {
      "name": name,
      "des": description,
      "url":url
    };
    axios.put(updateBrandAPI, sendObj).then((res) => {
        alert("Data Updated");
      });

      axios.get(listBrandAPI).then((res) => {
        setBrand(res.data);
      });
    
  }
  

  return (
    <>
    {props.adminstatus ?(
    <>
    
    
    
    <><Navbar adminstatus = {props.adminstatus} fun ={props.adminfun} /></>
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left"></div>
          <div className="col-md-9 register-right">
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            >
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Edit Products
              </a>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Update Brand</h3>
                <div className="row register-form">
                  {brandlist[0] ? (
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Category Name *"
                          onInput={e => setName(e.target.value)}
                          defaultValue={brandlist[0].name}
                        />
                        
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Category Description *"
                          defaultValue={brandlist[0].des}
                          onInput={e => setDescription(e.target.value)}
                          
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Category Image Url *"
                          defaultValue={brandlist[0].url}
                          onInput={e => setUrl(e.target.value)}
                          
                        />
                      </div>
                   
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="col-md-6">
                    <button onClick={updateBrand}
                      className="btn btn-primary a-btn-slide-text" type="submit"
                    >
                      <span
                        className="glyphicon glyphicon-remove"
                        aria-hidden="true"
                      ></span>
                      <span>
                        <strong>Update</strong>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    ):(<Link to={"/adminlogin"} className="btn btn-primary a-btn-slide-text">
    <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
    <span><strong>Login to View</strong></span>            
    </Link>)}
    </>
  );
};

export default BrandUpdate;
