import { Link } from "react-router-dom";
import "../Cart/GetCart.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar'
const GetCart = (props) => {
  const [cart, setCart] = useState([]);

  const CartAPI = "http://localhost:1234/cart/getallcarts";

  useEffect(() => {
    axios.get(CartAPI).then((res) => {
      setCart(res.data);
      console.log(res.data)
      console.log(cart)
    });
  
  
  }, []);

 

  return (
    <>
    {props.adminstatus ?(
    <>
    <><Navbar adminstatus = {props.adminstatus} fun ={props.fun} /></>
      <section className="intro">
        <div className="gradient-custom-2 h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-dark table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Email</th>
                          <th scope="col"> Products</th>
                          <th scope="col">Cart Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart[0]?(
                        <>
                        {cart.map((obj) => (
                            
                          <tr>
                            <th scope="row">{obj.customer_id.name}</th>
                            <td>{obj.customer_id.email}</td>

                            <td>

                            {obj.products.map((val)=>(
                                
                                
                                <span> {val.product_id.name} |  </span> 
                                
                            ))}
                            </td>
                            <td>{obj.total}</td>
                           
                          </tr>

                        ))}
                        </>
                         ):("data not loaded")} 
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <></>
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

export default GetCart;
