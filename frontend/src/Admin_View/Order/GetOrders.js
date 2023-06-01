import { Link } from "react-router-dom";
import "../Order/GetOrders.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar'
import Scrollbars from "react-custom-scrollbars";

const GetOrders = (props) => {
  const [orders, setOrders] = useState([]);



const getAllOrders = ()=>{
  const OrdersAPI = "http://localhost:1234/order/getallorder";
  axios.get(OrdersAPI).then((res) => {
    setOrders(res.data);
  });

}

  
  useEffect(() => {
   getAllOrders()
  }, []);

  console.log(orders)

  const UpdateStatustoApproveCancel =(order_id,id1,id2)=>{
    let myobj = {}
    orders.map((value) =>{value.products.map(value2 =>{
      if (value2._id == id1 && value2.product_id._id ==id2)
      {value2.order_status = "Order Canceled "}
      myobj = value
    })})
    console.log(myobj)

    axios.put("http://localhost:1234/order/updateordertbyid/" +order_id,myobj).then((res) => {
          alert("Data Updated ")
          getAllOrders()
      });


  }




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
                    <Scrollbars style={{ width:"100%", height: 400 }}>
                      <thead>
                        <tr>
                          <th scope="col">Order ID</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Customer Email</th>
                          <th scope="col">Products</th>
                          <th scope="col">Order Status</th>
                          <th scope="col">Order Date</th>
                          <th scope="col">Order Value</th>
                          
                        </tr>
                      </thead>
                     
                      <tbody>
                     
                        {orders[0]?(
                          
                          <>
                        {orders.map((obj) => (
                            <>
                            
                          <tr>
                            <th scope="row">{obj._id}</th>
                            <td>{obj.customer_id.name}</td>
                            <td>{obj.customer_id.email}</td>

                            {/* <Scrollbars style={{ width:200, height: 100 }}> */}
                              <td>
                            {obj.products.map((val)=>(
                              <span>
                                <td>{val.product_id.name} 
                                {val.order_status ==="Order Cancel Processed"?(
                                <button onClick={e=>UpdateStatustoApproveCancel(obj._id,val._id,val.product_id._id)} type="button" class="btn btn-success btn-sm">✓</button>
                                ):("")} 
                                </td>
                                </span>
                            ))}
                            </td>
                            {/* </Scrollbars> */}
                            
                            <td>
                            {/* <Scrollbars style={{ width:200, height: 100 }}> */}
                            {obj.products.map((val)=>(
                                <span>
                                <td>{val.order_status}</td>
                                </ span>
                            ))}
                             {/* </Scrollbars> */}
                            </td>
                           
                            
                            <td>{obj.createdAt.slice(0,10)}</td>
                            <td>{obj.total_amount}</td>
                           
                

                          </tr>
                          </>
                        ))}
                    </>
                        ):("")}
                        
                      </tbody>
                      </Scrollbars>
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

export default GetOrders;
