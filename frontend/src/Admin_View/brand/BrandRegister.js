import './BrandRegister.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLogin from '../AdminLogin/AdminLogin'

import Navbar from '../Navbar';

const BrandRegister = (props) => {


    const createBrandAPI = "http://localhost:1234/brand/createbrand"

    const [BrandName, setBrandName] = useState("");
    const [BrandDes, setBranddes] = useState("");
    const [url, setUrl] = useState();
    


function createNewBrand(){
    let  obj = {
    "name": BrandName,
     "des":  BrandDes,
     "url":url

    }

    axios.post(createBrandAPI, obj).then((res) => {
        alert("Brand Added");
        
      });
}

  return (
    <>
    {props.adminstatus ?(
    <>
    <><Navbar  adminstatus = {props.adminstatus} fun ={props.adminfun}/></>
<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Add Brand</a>
                            
                        
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">ADD NEW Brand</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Brand Name *" onInput ={e => setBrandName(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Brand Description *" onInput ={e => setBranddes(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Category Image Url *"
                          onInput={e => setUrl(e.target.value)}
                          
                        />
                      </div>
                                      
                                    </div>
                                    <div class="col-md-6">

                                        <button onClick={createNewBrand} class="btn btn-primary a-btn-slide-text">
       <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        <span><strong>Register</strong></span>            
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
}



export default BrandRegister;