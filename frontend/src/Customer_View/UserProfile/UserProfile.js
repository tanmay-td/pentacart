import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import NavbarCustomer from '../NavbarCustomer';
import { Link, useNavigate } from "react-router-dom";
import { ValidateEmail,CheckPassword,CheckPhoneNumber } from '../CustomerLogin/Register/Validation_Customer';
import { Alert } from 'react-bootstrap';
import { enterAllFieldsToastMessage } from '../../toastify/AllToastMessages';

const UserProfile = (props) => {

    
 const [customer, setCustomer] = useState([]);
 
 const [password, setPassword] = useState("1");
 
 const [phone, setPhone] = useState("1");

 const [rerender, setRerender] = useState(false);


 const navigate = useNavigate();

const CustomerAPI = "http://localhost:1234/customer/getcustomerbyid/"+ props.name._id;

const CustomerUpdateDataAPI = "http://localhost:1234/customer/updatecustomerbyid/"+ props.name._id;




const getUserDetails = ()=>{
    axios.get(CustomerAPI).then((res) => {
        setCustomer(res.data);
        console.log(customer)
      });
}



const UpdateUserProfile = (myobj)=>{

    axios.put(CustomerUpdateDataAPI,myobj).then((res) => {
        enterAllFieldsToastMessage("Data Updated")
        getUserDetails()
        
      });
}



  useEffect(() => {
   getUserDetails()
  },[props.name])

  useEffect(() => {
	getUserDetails()
}, [rerender])


function UpdateData (){
const myobj = customer[0]
    

if (password !=="1"){
    if(!CheckPassword(password)) {enterAllFieldsToastMessage("Enter Vaild Password")} else{
        myobj.password = password
        UpdateUserProfile(myobj)
    }
}

if (phone !=="1"){
    if(!CheckPhoneNumber(phone)) {enterAllFieldsToastMessage("Enter Vaild Phone Number")} else{
        myobj.phone = phone
        UpdateUserProfile(myobj)
    }
}
    





  



}



  return (
    <div>
        <>
        <NavbarCustomer value={props.value} customerstatus = {props.customerstatus}  customerlogin ={props.customerlogin} name ={props.name} />
        </>
      <>
      {customer[0]?(
      <div class="container-xl px-4 mt-4">
    <hr class="mt-0 mb-4" />
    <div class="row">
        <div class="col-xl-8">
            <div class="card mb-4">
                <div class="card-header">Account Details </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Name</label>
                            <input class="form-control" id="inputUsername" type="text" value={customer[0].name} disabled />
                        </div>
                       
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName2">Email</label>
                                <input class="form-control" id="inputOrgName2" type="text" value={customer[0].email}   disabled />
                            </div>
                           
                        </div>
                       
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName3">Phone Number</label>
                                <input class="form-control" id="inputOrgName3" type="text" defaultValue={customer[0].phone} key={customer[0].phone} disabled />
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">New Phone Number</label>
                                <input class="form-control" id="inputLocation" type="text" onChange={e=>(setPhone(e.target.value))} />
                            </div>
                        </div>

                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName10">Password</label>
                                <input class="form-control" id="inputOrgName10" type="password" defaultValue={customer[0].password} key={customer[0].password} disabled />
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation67">New Password</label>
                                <input class="form-control" id="inputLocation67" type="password" 
                                onChange={e=>(setPassword(e.target.value))}  />
                            </div>
                        </div>
                      
                        <Link to="/userprofile" class="btn btn-primary" type="button" onClick={UpdateData}>Save changes</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
      
      ):("Data Not Loaded Yet")}
      
      </>
    </div>
  )
}

export default UserProfile
