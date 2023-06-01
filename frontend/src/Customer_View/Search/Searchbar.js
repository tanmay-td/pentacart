
import { Link } from "react-router-dom";
import "../getProducts/GetAllProducts.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarCustomer from "../NavbarCustomer";
import { useParams } from 'react-router-dom';
import Scrollbars from "react-custom-scrollbars";

const Searchbar = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [productstate, setProductstate] = useState(false);
  const [newproduct, setnewProduct] = useState([]);
  // const [low, setLow] = useState(0);
  // const [high, setHigh] = useState(99999999999999);

  const productsAPI = "http://localhost:1234/product/getallproducts"



  const getProducts = () => {
    axios.get(productsAPI).then((res) => {
      setnewProduct(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  useEffect(() => {
    let searchValues = [];  
    searchValues = newproduct.filter((data) =>  SearchAllFiled(id,data)   );
    setProduct(searchValues)
  }, [newproduct]);


  const SearchAllFiled =(id,data)=>{

    if (data.name.toLowerCase().includes(id.toLowerCase())){
      return true
    }
    else if(data.category_id.name.toLowerCase().includes(id.toLowerCase()) ){
      return true
    }
    else if(data.brand_id.name.toLowerCase().includes(id.toLowerCase()) ){
      return true
    }else if(data.desc.toLowerCase().includes(id.toLowerCase()) ){
      return true
    }
    else{
      return false
    }
  }

  const highToLow = () => {
    const normal = product;
    normal.sort((a, b) => {
      return a.price - b.price;
    });

    setProduct(normal.reverse());
    setProductstate(!productstate);
  };

  const lowToHigh = () => {
    const normal = product;
    normal.sort((a, b) => {
      return a.price - b.price;
    });
    setProduct(normal);
    setProductstate(!productstate);
  };
  // const products_temp =product

  // const InRange =()=>{

  //     console.log(product,"1")
  //     let temp_products =[]
  //     products_temp.map((value)=>{
  //     if (value.price > low && value.price <high){
  //     temp_products.push(value)}})
  //     setProduct(temp_products)
  //     setProductstate(!productstate)
  //     console.log(temp_products,"2")
  //     console.log(product,"3")
  //     getProducts()

  //     }

  return (
    <>
      <>
        <NavbarCustomer
          value={props.value}
          customerstatus={props.customerstatus}
          customerlogin={props.customerlogin}
          name={props.name}
        />
      </>
      <div
        className="btn-group my-3"
        role="group"
        aria-label="Basic example"
        style={{ marginTop: "2px", position: "relative", left: "39%" }}
      >
        <button
          type="button"
          onClick={lowToHigh}
          class="btn btn-secondary mx-3 rounded-pill"
        >
            <i className="fa fa-arrow-circle-o-down pe-2" aria-hidden="true"></i>
          Low to High
        </button>
        <button
          type="button"
          onClick={highToLow}
          class="btn btn-secondary rounded-pill"
        >
          <i className="fa fa-arrow-circle-o-up pe-2" aria-hidden="true"></i>
          High to Low
        </button>
      </div>
      {/* <div class="input-group mb-3">
  <div class="input-group-prepend">
  <input type="text" onChange={e=>(setLow(e.target.value))} class="form-control" placeholder="Min" aria-label="" aria-describedby="basic-addon1" />
  <input type="text" onChange={e=>(setHigh(e.target.value))} class="form-control" placeholder="Max" aria-label="" aria-describedby="basic-addon1" />
  </div>
  <button onClick={InRange} class="btn btn-outline-secondary" type="button">Go</button>
</div> */}
      <div class="py-3 py-md-5 bg-light">
        <div class="container">
        <div class="col-md-12">
              <h4 class="mb-4"> Search Results({product.length})</h4>
            </div>
        <Scrollbars style={{ width:"100%", height: 350 }}> 
          <div class="row">
            
            {product[0] ? (
              <>
                {product.map((obj) => (
                  <div class="col-md-3 ">
                    <div class="product-card border border-success rounded">
                      <div class="product-card-img text-center">
                        <label class="stock bg-success">In Stock</label>
                        <img
                          src={obj.url}
                          className="text-center m-auto p-3"
                          alt={obj.name}
                          style={{ height: "200px", width: "250px" }}
                        />
                      </div>
                      <div class="product-card-body">
                        <p class="product-brand">{obj.brand_id.name}</p>
                        <h5 class="product-name">
                          <Link to={"/viewproduct/" + obj._id}>{obj.name}</Link>
                        </h5>
                        <div>
                          <span class="selling-price">
                            ₹{obj.price - obj.price * 0.1}
                          </span>
                          <span class="original-price">₹{obj.price}</span>
                        </div>
                        <div class="mt-2">
                          <a onClick={() => props.fun(obj)} class="btn btn1">
                            Add To Cart
                          </a>
                          <Link to={"/viewproduct/" + obj._id} class="btn btn1">
                           
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              ""
            )}
           
          </div>
          </Scrollbars>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
