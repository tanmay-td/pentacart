import "../ViewProductWindow/ViewProductWindow.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarCustomer from "../NavbarCustomer";
import { Link, useParams } from "react-router-dom";
import { enterAllFieldsToastMessage } from "../../toastify/AllToastMessages";

const ViewProductWindows = (props) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const productsAPI =
    "http://localhost:1234/product/getproductbyid/" + String(id);

  useEffect(() => {
    axios.get(productsAPI).then((res) => {
      setProduct(res.data);
    });
  }, []);

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
      {product[0] ? (
        <div class="py-3 py-md-5 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-5 mt-3">
                <div class="bg-white border">
                  <img
                    src={product[0].url}
                    class="w-100 img1"
                    alt={product[0].name}
                  />
                </div>
              </div>

              <div class="col-md-7 mt-3">
                <div class="product-view">
                  <h4 class="product-name">
                    {product[0].name}
                    <label class="label-stock bg-success">
                      In Stock {product[0].instock}
                    </label>
                  </h4>
                  <hr />
                  <div>
                    <span class="selling-price">
                      ₹{product[0].price - product[0].price * 0.1}
                    </span>
                    <span class="original-price">₹{product[0].price}</span>
                  </div>
                  <div class="mt-2">
                    <div class="input-group">
                      <Link
                        onClick={(e) => props.fun2(product[0])}
                        class="btn btn1"
                      >
                        <i class="fa fa-minus"></i>
                      </Link>
                      <input
                        type="text"
                        value={props.value.map((value) =>
                          value._id == product[0]._id ? value.quantity :  0
                        )}
                        class="input-quantity"
                        placeholder="0"
                      />
                      <Link
                        onClick={(e) => props.fun(product[0])}
                        class="btn btn1"
                      >
                        <i class="fa fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="mt-2">
                    <a onClick={(e) => {props.fun(product[0])
                    enterAllFieldsToastMessage("Added to Cart")}} class="btn btn1">
                      {" "}
                      <i class="fa fa-shopping-cart"></i> Add To Cart
                    </a>
                  </div>
                  <div class="mt-3">
                    <h5 class="mb-0">{product[0].brand_id.name}</h5>
                    <p>{product[0].brand_id.des}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-3">
                <div class="card">
                  <div class="card-header bg-white">
                    <h4>Description</h4>
                  </div>
                  <div class="card-body">
                    <p>{product[0].desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ViewProductWindows;
