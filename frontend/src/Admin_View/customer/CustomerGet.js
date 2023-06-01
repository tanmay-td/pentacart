import { Link } from "react-router-dom";
import "../customer/CustomerGet.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar'
import AdminLogin from '../AdminLogin/AdminLogin'
import Scrollbars from "react-custom-scrollbars";
const CustomerGet = (props) => {
  const [customer, setCustomer] = useState([]);

  const CustomerAPI = "http://localhost:1234/customer/getallcustomer";

  useEffect(() => {
    axios.get(CustomerAPI).then((res) => {
      setCustomer(res.data);
    });
  }, []);


  return (
    <>
    {props.adminstatus ?(
    <>
    <><Navbar adminstatus = {props.adminstatus} fun ={props.adminfun} /></>
      <section className="intro">
        <div className="gradient-custom-2 h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
            
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive">
                  <Scrollbars style={{ width:"100%", height: 600 }}>  
                    <table className="table table-dark table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Phone no</th>
                          <th scope="col"> Email</th>
                          <th scope="col">Password</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customer.map((obj) => (
                          <tr>
                            <th >{obj.name}</th>
                            <td>{obj.phone}</td>
                            <td>{obj.email}</td>
                            <td>{obj.password}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    </Scrollbars>
                  </div>
                  
                </div>
                
              </div>
              
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

export default CustomerGet;
