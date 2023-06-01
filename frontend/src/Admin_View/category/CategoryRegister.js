import './CategoryRegister.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar';
import AdminLogin from '../AdminLogin/AdminLogin'

const CategoryRegister = (props) => {


    const createCustomerAPI = "http://localhost:1234/category/createcategory"

    const [categoryName, setCategoryName] = useState();
    const [categoryDes, setCategorydes] = useState();
    const [categoryUrl, setCategoryUrl] = useState();
    


function createNewCategory(){
    let  obj = {
    "name": categoryName,
     "des":  categoryDes,
     "url":categoryUrl

    }

    axios.post(createCustomerAPI, obj).then((res) => {
        alert("Category Added");
        
      });
}

  return (
    <>
    {props.adminstatus ?(
    <>
    
    <><Navbar adminstatus = {props.adminstatus} fun ={props.adminfun} /></>
<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Add Category</a>
                            
                        
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">ADD NEW Category</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Category Name *" onInput ={e => setCategoryName(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Category Description *" onInput ={e => setCategorydes(e.target.value)} />
                                        </div>

                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Category Image Url *" onInput ={e => setCategoryUrl(e.target.value)} />
                                        </div>
                                      
                                    </div>
                                    <div class="col-md-6">

                                        <button onClick={createNewCategory} class="btn btn-primary a-btn-slide-text">
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



export default CategoryRegister;