import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar'
import {
    MDBContainer,MDBCol,MDBRow,MDBBtn,MDBIcon,MDBInput,MDBCheckbox,
} from "mdb-react-ui-kit";
import { enterAllFieldsToastMessage } from "../../toastify/AllToastMessages";

function AdminLogin(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginAdmin = (e) => {
        e.preventDefault();
        try {
            console.log(email,password)
            if (email === "" || password === "") enterAllFieldsToastMessage("Enter All Field");
            else {
                axios.get("http://localhost:1234/admin/getadminbyemail/"+email).then((res) => {
                    if(res.data.length == 0){ enterAllFieldsToastMessage("Invalid email or password")} else{

                        if (password !== res.data[0].password) {
                            enterAllFieldsToastMessage("Entered Password is Wrong")
                        }else{
                            props.fun(true)
                            navigate("/product/get", { replace: true })
                        }

                    }

                    
                            
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <Navbar adminstatus = {props.adminstatus} fun ={props.adminfun} />
            {" "}
            <div className="text-center bg-primary mb-3 border border-dark">
                <h1>Admin</h1> {" "}
            </div>
            {" "}
            <MDBRow className="">
                {" "}
                <MDBCol col="10" md="6">
                    {" "}
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid"
                        alt="Sample image"
                    />
                    {" "}
                </MDBCol>

                <MDBCol col="4">

                    <MDBInput
                        wrapperClass="mb-4"
                        label="Email address"
                        type="email"
                        onInput={(e) => setEmail(e.target.value)}
                        size="lg"
                    />

                    <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        type="password"
                        onInput={(e) => setPassword(e.target.value)}
                        size="lg"
                    />

                    <div className="d-flex justify-content-between mb-4">
                        <a href="!#">Forgot password?</a>
                    </div>

                    <div className="text-center text-md-start mt-4 pt-2">
                        {" "}
                        <MDBBtn className="mb-0 px-5" onClick={loginAdmin}>
                            Login
                        </MDBBtn>

                    </div>

                </MDBCol>

            </MDBRow>
            {" "}
        </>
    );
}
export default AdminLogin;
