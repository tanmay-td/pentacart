import { Link } from "react-router-dom";
import "./GetAllCategory.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarCustomer from "../NavbarCustomer";
import Scrollbars from "react-custom-scrollbars";



const GetAllCategory = (props) => {
  const [category, setCategory] = useState([]);

 

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setCategory(res.data.reverse());
    });
  }, []);


  return (
    
     <>
     <><NavbarCustomer value ={props.value} customerstatus = {props.customerstatus}  customerlogin ={props.customerlogin} name ={props.name}  /></>
     <div class="py-3 py-md-5 bg-light">
        <div class="container">
        <Scrollbars style={{ width:"100%", height: 450 }}> 
            <div class="row">
                <div class="col-md-12">
                    <h4 class="mb-4">Our {props.title}</h4>
                </div>
                
                {category.map(obj=>(
                
                <div class="col-6 col-md-3">
                     
                    <div className="category-card text-center align-items-center">
                   
                        <Link to={String(props.url_route) +obj._id} >
                            <div class="category-card-img">
                                <img src={obj.url} className="img2" alt={obj.name} />
                            </div>
                            <div class="category-card-body">
                                <h5>{obj.name}</h5>
                            </div>
                        </Link>
                       
                    </div>
                </div>
               
                ))}
                

               
            </div>
             </Scrollbars>
        </div>
    </div>
     
     </>
                        
         )}

export default GetAllCategory;
