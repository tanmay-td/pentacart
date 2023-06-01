
import '../Register/Customersignup.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../../NavbarCustomer';
import { ValidateEmail,CheckPassword,CheckPhoneNumber } from './Validation_Customer';
import { useNavigate } from 'react-router-dom';
import { enterAllFieldsToastMessage } from '../../../toastify/AllToastMessages';

const Customersignup = (props) => {
  const [show, setShow] = useState(false);
    const [msg, setmsg] = useState("");
    const [name, setName] = useState();
    const [phoneno, setPhoneno] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    
function createNewCustomer(){
        let  obj = {
        "name": name,
         "phone":phoneno,
         "email":email,
         "password":password,
    
        }
        if (name && phoneno && email && password){

          if (!ValidateEmail(email) ){ enterAllFieldsToastMessage("Enter A vaild Email")
           }else{
            if (!CheckPassword(password) ) {  enterAllFieldsToastMessage("Enter A vaild Password")
          }else{
              if (!CheckPhoneNumber(phoneno) ) 
              enterAllFieldsToastMessage("Enter A vaild Phone Number")
          
            }
          }
             
            
              if(ValidateEmail(email) && CheckPassword(password)&& CheckPhoneNumber(phoneno)){

                console.log("this obj",obj)
                axios.post("http://localhost:1234/customer/createcustomer/", obj).then((res) => {
                  alert("Customer Created");
                  navigate("/customerlogin", { replace: true })
                  
                }).catch((error)=>{ 
                  enterAllFieldsToastMessage("Email Already Exists Try With Another Email")
                  

                })
                

              }
              

          


        }else{
            enterAllFieldsToastMessage("Check Entered Field")
            
        }
    
        
    }
   


  return (
    <>
      <>
      <Navbar /> 
        <div class="container register-form">
          <div class="form">
            <div class="note">
              <p>Create New Account</p>
            </div>
            <div class="form-content">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name *"
                      onChange ={e => setName(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number *"
                      onChange ={e => setPhoneno(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email *"
                     
                      onChange ={e => setEmail(e.target.value)}
                    />
                    {console.log(name)}
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password *"
                     
                      onChange ={e => setPassword(e.target.value)}
                    />
                    </div>
                    
                </div>
              </div>
              <button onClick={createNewCustomer} class="btnSubmit">
                Signup
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Customersignup;
