import "../ShowCart/ViewCart.css";
import { isEqual } from "lodash";
import axios from "axios";
import React, { useEffect, useState, useReducer } from "react";
import NavbarCustomer from "../NavbarCustomer";
import { Link, useParams } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

const ViewCart = (props) => {
  let totalPrice = 0;

  const sendCarttoDatabase = () => {
    const product_array = [];
    axios
      .get("http://localhost:1234/cart/getcartbycustomerid/" + props.name._id)
      .then((res) => {
        if (res.data.length > 0) {
          props.value.map((value) => {
            const myobj = {
              product_id: value._id,
              quntity: value.quantity,
            };
            product_array.push(myobj);
          });
          const myobj = {
            products: product_array,
            total: totalPrice,
            customer_id: props.name._id,
          };

          console.log(myobj);
          axios
            .put(
              "http://localhost:1234/cart/updatecart/" + props.name._id,
              myobj
            )
            .then((res) => {
            });
        } else {
          props.value.map((value) => {
            const myobj = {
              product_id: value._id,
              quntity: value.quantity,
            };
            product_array.push(myobj);
          });
          const myobj = {
            products: product_array,
            total: totalPrice,
            customer_id: props.name._id,
          };

          axios
            .post("http://localhost:1234/cart/createcart", myobj)
            .then((res) => {
              alert("Cart Added to Database");
            });
        }
      });
  };

  return (
    <>
      {" "}
      <>
        <NavbarCustomer
          value={props.value}
          customerstatus={props.customerstatus}
          customerlogin={props.customerlogin}
          name={props.name}
        />
      </>
      <div class="py-3 py-md-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="shopping-cart">
                {props.value[0] ? (
                  <>
                   
                    <div class="cart-header d-none d-sm-none d-mb-block d-lg-block">
                      <div class="row">
                        <div class="col-md-6">
                          <h4>Products</h4>
                        </div>
                        <div class="col-md-2">
                          <h4>Price</h4>
                        </div>
                        <div class="col-md-2">
                          <h4>Quantity</h4>
                        </div>
                        <div class="col-md-2">
                          <h4>Remove</h4>
                        </div>
                      </div>
                    </div>
                    <Scrollbars style={{ width:1105, height: 325 }}>
                    {props.value.map((obj) => (
                      <div class="cart-item">
                        <div class="row">
                          <div class="col-md-6 my-auto">
                            <Link to={"/viewproduct/" + obj._id}>
                              <label class="product-name">
                                <img
                                  src={obj.url}
                                  alt={obj.name}
                                  style={{ width: "100px", height: "100px" }}
                                />
                                {obj.name}
                              </label>
                            </Link>
                          </div>
                          <div class="col-md-2 my-auto">
                            <label class="price">
                              ₹{obj.price * obj.quantity}{" "}
                            </label>
                          </div>
                          <div class="col-md-2 col-7 my-auto">
                            <div class="quantity">
                              <div class="input-group">
                                <button
                                  onClick={() => props.fun2(obj)}
                                  class="btn btn1"
                                >
                                  <i class="fa fa-minus"></i>
                                </button>

                                <input
                                  type="text"
                                  value={obj.quantity}
                                  class="input-quantity"
                                />

                                <button
                                  onClick={() => props.fun(obj)}
                                  class="btn btn1"
                                >
                                  <i class="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-2 col-5 my-auto">
                            <div class="remove">
                              <button
                                onClick={() => props.fun3(obj)}
                                class="btn btn-danger btn-sm"
                              >
                                <i class="fa fa-trash"></i> Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </Scrollbars>

                    <div class="cart-item">
                      <div class="row">
                        <div class="col-md-6 my-auto">
                          <a href="">
                            <label class="product-name">Total</label>
                          </a>
                        </div>

                        {props.value.map((value) => {
                          totalPrice =
                            totalPrice + value.quantity * value.price;
                        })}
                        <div class="col-md-2 my-auto">
                          <label class="price">₹{totalPrice} </label>
                        </div>
                        <>
                          {props.customerstatus ? (
                            <div class="col-md-2 col-5 my-auto">
                              <div class="remove">
                                <Link
                                  to="/address/select"
                                  onClick={sendCarttoDatabase}
                                  class="btn btn-success btn-sm"
                                >
                                  Proceed to Checkout
                                </Link>
                              </div>
                            </div>
                          ) : (
                            <div class="col-md-2 col-5 my-auto">
                              <div class="remove">
                                <Link
                                  to="/customerlogin"
                                  class="btn btn-success btn-sm"
                                >
                                  Login to Buy Product
                                </Link>
                              </div>
                            </div>
                          )}
                        </>
                      </div>
                    </div>

                    
                  </>
                ) : (
                  <h1>NO Product In Cart</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCart;
