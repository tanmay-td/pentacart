import "./productRegister.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState, } from "react";
import axios from "axios";
import Navbar from '../Navbar';

const ProductUpdate = (props) => {
  const { id } = useParams();

  const [products, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);


  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState();
  const [categoryid, setCategoryid] = useState();
  const [productInstock, setProductInstock] = useState(0);
  const [productUrl, setProductUrl] = useState("");
  const [productDescription, setProductDescription] = useState("");


  const productsAPI = "http://localhost:1234/product/getproductbyid/" + String(id);
  const categoryAPI = "http://localhost:1234/category/getallcategory";
  const updateProductAPI ="http://localhost:1234/product/updateproductbyid/" + String(id);
  const getAllBrands  ="http://localhost:1234/brand/getallbrand/" 


  let objwithdetails
  useEffect(() => {
    axios.get(productsAPI).then((res) => {
      setProduct(res.data);
       
    });

    axios.get(getAllBrands).then((res) => {
      setBrands(res.data)
    })
  }, []);

  useEffect(() => {
    axios.get(categoryAPI).then((res) => {
      setCategory(res.data);
    });
  }, []);

  function updateProduct() {
    objwithdetails = products[0]

    if(price)objwithdetails.price = price

    if(name)objwithdetails.name = name

    if(categoryid)objwithdetails.category_id = categoryid

    if(brand)objwithdetails.brand_id = brand

    if(productDescription)objwithdetails.desc = productDescription

    if(productUrl)objwithdetails.url = productUrl

    if(productInstock)objwithdetails.instock = productInstock

    
    axios.put(updateProductAPI, objwithdetails).then((res) => {
        alert("Data Updated");
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
                <h3 className="register-heading">Update Product</h3>
                <div className="row register-form">
                  {products[0] ? (
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Product Name *"
                          onInput={e => setName(e.target.value)}
                          
                          defaultValue={products[0].name}
                        />

                      </div>
                      <div className="form-group">
                      {brands[0] ? (
                      <div className="form-group">
                        <select class="form-control" onChange={e => setBrand(e.target.value)}>
                        <option value="" disabled="true" selected="selected"> Brands </option>
                          {brands.map(({ name, _id }) => (
                            <option value={_id}>{name}</option>
                          ))}
                        </select>

                      </div>
                    ) : (
                      "hello"
                    )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Price *"
                          onInput={e => setPrice(e.target.value)}
                          defaultValue={products[0].price}
                        />
                        {console.log(price)}
                      </div>
                      <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Product Description *" onInput ={e => setProductDescription(e.target.value)}
                                            defaultValue={products[0].desc} />
                                        </div>

                    </div>
                  ) : (
                    ""
                  )}
                  <div className="col-md-6">
                    {category[0] ? (
                      <div className="form-group">
                        <select  class="form-control" onChange={e => setCategoryid(e.target.value)}>
                        <option value="" selected="selected" disabled="true">Category</option>
                          {category.map(({ name, _id }) => (
                            <option value={_id}>{name}</option>
                          ))}
                        </select>
                      </div>

                    ) : (
                      "hello"
                    )}
                        {products[0]?(
                        <>
                                            <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Product Instock *" onInput ={e => setProductInstock(e.target.value)}
                                            defaultValue={products[0].instock} />
                                             </div>
                        <div class="form-group">
                      <input type="text" class="form-control" placeholder="Product Link *" onInput ={e => setProductUrl(e.target.value)} 
                      defaultValue={products[0].url}/>
                  </div>
                  </>
                  ):("")}
                    <button onClick={updateProduct}
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

export default ProductUpdate;
