import { Link } from 'react-router-dom';
import './ProductGet.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductUpdate  from  './ProductUpdate'
import Navbar from '../Navbar';
import AdminLogin from '../AdminLogin/AdminLogin';
import Scrollbars from 'react-custom-scrollbars';


const ProductGet = (props) => {

const [product, setProduct] = useState([]);

const  productsAPI= "http://localhost:1234/product/getallproducts"
const productDeleteAPI = "http://localhost:1234/product/deleteproductbyid/"
    
useEffect(() => {
  axios.get(productsAPI).then(res => {
    setProduct(res.data);})
  },[])


  function DeleteProduct(id) {
    axios.delete(productDeleteAPI + String(id) ).then((res) => {
        alert("Data Deleted");
         window.location.reload(true)
      });
    
  }

  return (
    <>
    {props.adminstatus ?(
    <>
    <><Navbar adminstatus = {props.adminstatus}  fun ={props.adminfun}/></>

      <section className="intro">
        <div className="gradient-custom-2 h-100">
          <div className="mask d-flex align-items-center h-100" >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive">
                  <Scrollbars style={{ width:"100%", height: 600 }}> 
                    <table className="table table-dark table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Product Name</th>
                          <th scope="col">Product Brand</th>
                          <th scope="col">Price</th>
                          <th scope="col">Category</th>
                          <th scope="col">Description</th>
                          <th scope="col">Instock</th>
                          <th scope="col">Image</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {product[0] ? (
                          
                          <>
                          {console.log(product)}
                      {product.map((obj)=>( 
                           <tr> 
                            
                           <th scope="row">{obj.name.slice(0,20)}</th>
                           <td>{obj.brand_id.name}</td>
                           <td>{obj.price}</td>
                           <td>{obj.category_id.name}</td>
                           <td>{obj.desc.slice(0,30)}</td>
                           <td>{obj.instock}</td>
                           <td><img class ="img2"src={obj.url} alt={obj.name} /></td>
                            
                           <td> <Link to={"/product/update/"+obj._id} className="btn btn-primary a-btn-slide-text">
                           <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                           <span><strong>Edit</strong></span>            
                           </Link></td>
                           <td><Link onClick={()=>DeleteProduct(obj._id)} className="btn btn-primary a-btn-slide-text">
                           <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                           <span><strong>Delete</strong></span>            
                           </Link></td>
                           </tr> 
                               ))}
                               </>

                                ):("")}
                          
                      </tbody>
                    </table>
                    </Scrollbars>
                  </div>
                </div>
              </div>
            </div>
            <>
            </>
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
}

export default ProductGet;