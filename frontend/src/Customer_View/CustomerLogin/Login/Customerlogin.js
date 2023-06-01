
import '../Register/Customersignup.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../../NavbarCustomer';
import { Link, useNavigate } from "react-router-dom";
import { ValidateEmail,CheckPassword} from '../Register/Validation_Customer';
import { enterAllFieldsToastMessage } from '../../../toastify/AllToastMessages';


const Customerlogin = (props) => {

    const [show, setShow] = useState(false);
    const [msg, setmsg] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    



function loginCustomer(){
        if (email && password){
       if (ValidateEmail(email)){
                  if (CheckPassword(password)){

                    axios.get("http://localhost:1234/customer/getcustomerbyemail/"+email).then((res) => {
                      if(res.data.length == 0){ alert("Invalid email or password")}else{
                        if (password !== res.data[0].password) {
                          enterAllFieldsToastMessage("Entered Password is Wrong")
                      }else{
                          props.customerlogin(true)
                          console.log(res.data[0])
                          props.customerdetailsfun(res.data[0])
                          navigate("/", { replace: true })
                      }
                      }
                    })


                  }else{
                    enterAllFieldsToastMessage("Enter Correct Password")

                  }
                }else{
                  enterAllFieldsToastMessage("Enter Correct Email")

                }   


        }else{
          enterAllFieldsToastMessage("Check Entered Field")
            
            
        }
    
        
    }


  return (
    <>
      <>
      <Navbar customerstatus = {props.customerstatus} customerlogin ={props.customerlogin} /> 
      
        <div class="container register-form">
          <div class="form">
        
            <div class="note">
              <p>User Login</p>
            </div>
            <div class="form-content">
              <div class="row">
                <div class="col-md-6">
               
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email *"
                     
                      onInput ={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password *"
                     
                      onInput ={e => setPassword(e.target.value)}
                    />
                    </div>
                    
                </div>
              </div>
              <button onClick={loginCustomer} class="btnSubmit">
                Login
              </button>

              <Link to="/customerregister" class="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
        
      </>
    </>
  );
};

export default Customerlogin;
