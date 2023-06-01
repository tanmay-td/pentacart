import './productRegister.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar';
import AdminLogin from '../AdminLogin/AdminLogin'

const ProductRegister = (props) => {

    const createProductAPI ="http://localhost:1234/product/createproduct"
    const categoryAPI = "http://localhost:1234/category/getallcategory"
    const getAllBrands  ="http://localhost:1234/brand/getallbrand/" 

    let Objtosend

    const [category, setCategory] = useState([]);
    const [brands, setBrands] = useState([]);
    const [statebrands, setstateBrands] = useState(false);


    const [productName, setProductName] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState();
    const [productInstock, setProductInstock] = useState(0);
    const [productUrl, setProductUrl] = useState("");
    const [productDescription, setProductDescription] = useState("");



    useEffect(() => {
        axios.get(categoryAPI).then((res) => {
          setCategory(res.data);
        });

        axios.get(getAllBrands).then((res) => {
            setBrands(res.data)
          })
      }, []);

function createNewProduct(){
    if (!productName){alert("Name Cant be Empty")}
    if (!productInstock){alert("Stock Cant be Empty")}
    if (!productUrl){alert("Url Cant be Empty")}
    if (!productDescription){alert("Description Cant be Empty")}
    if (!productBrand){alert("Brand Cant be Empty")}
    if (!productPrice){alert("Price Cant be Empty")}
    if (!productCategory){alert("Category Cant be Empty")}

    
    if(productName && productBrand && productCategory && productPrice &&productInstock &&productUrl && productDescription){
     Objtosend = {
    "name":productName ,
    "price": productPrice ,
     "brand_id":productBrand  ,
     "category_id":productCategory,
     "desc":productDescription,
     "url":productUrl,
     "instock":productInstock

    }

    axios.post(createProductAPI, Objtosend).then((res) => {
        alert("Product Added");
        setstateBrands(!statebrands)
        
      });
    }
}

  return (
    <>
    {props.adminstatus ?(
    <> <><Navbar adminstatus = {props.adminstatus} fun ={props.adminfun} /></>
<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Add Products</a>
                            
                        
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">ADD NEW PRODUCT</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Product Name *" onInput ={e => setProductName(e.target.value)} />
                                        </div>

                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Product Description *" onInput ={e => setProductDescription(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                        {brands[0] ? (
                      <div className="form-group">
                        <select class="form-control"  onChange={e => setProductBrand(e.target.value)}>
                          {brands.map(({ name, _id }) => (
                            <option value={_id}>{name}</option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      "hello"
                    )}
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Price *"
                                            onInput ={e => setProductPrice(e.target.value)} />
                                        </div>
                                        {console.log(productPrice)}
                                      
                                    </div>
                                    <div class="col-md-6">
                                        
                                        {category[0] ?(
                                          <>
                                        <div class="form-group">
                                            <select class="form-control" onChange={e => setProductCategory(e.target.value)} >
                                            {category.map(({_id,name})=>(
                                                <option value={_id}>{name}</option>
                                            ))}
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Product Instock *" onInput ={e => setProductInstock(e.target.value)} />
                                        </div>

                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Product Link *" onInput ={e => setProductUrl(e.target.value)} />
                                        </div>
                                        </>
                                         ):("")}



                                            {console.log(productCategory)}
                                        <button onClick={createNewProduct} class="btn btn-primary a-btn-slide-text">
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



export default ProductRegister;