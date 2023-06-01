import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarCustomer from "../NavbarCustomer";
import { Button } from "react-bootstrap";
import './Address.css'
const Address = (props) => {
  const createAddressAPI = "http://localhost:1234/address/createaddress";

const navigate = useNavigate()

  const [houseNumber, setHouseNumber] = useState();
  const [pinCode, setPinCode] = useState();
  const [area, setArea] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();

  function createNewAddress() {
    console.log(pinCode, houseNumber, area, city, state, country);
    let obj = {
      pincode: pinCode,
      houseno: houseNumber,
      area: area,
      city: city,
      state: state,
      country: country,
      customer_id: props.name._id,
    };
    if (houseNumber && pinCode && area && city && state && country) {
      axios.post(createAddressAPI, obj).then((res) => {
        alert("Address Added");
        navigate("/address/select")

      });
    } else {
      alert("Enter All Fields");
    }
  }

  return (
    <>
      <NavbarCustomer
        value={props.value}
        customerstatus={props.customerstatus}
        customerlogin={props.customerlogin}
        name={props.name}
      />
      {props.customerstatus ? (
        <>
          <div class="container">
            <div class="row">
              <div class="col py-4 px-3 mx-2 align-self-center my-3 main-address-form-container mx-2">
                <form class="form-horizontal" role="form">
                  <h2 className="mb-4 text-info address-heading">Address</h2>

                  <div className="row mb-2">
                    <div class="form-group col-md-6">
                      <label for="inputFullName" class=" control-label">
                        House Number
                      </label>
                      <div class="">
                        <input
                          onInput={(e) => {
                            setHouseNumber(e.target.value);
                          }}
                          type="text"
                          class="form-control"
                          id="inputFullName"
                          name="full-name"
                          placeholder="House Number"
                        />
                      </div>
                    </div>

                    <div class="form-group col-md-6">
                      <label for="inputAddressLine1" class=" control-label">
                        Address Line 1
                      </label>
                      <div class="">
                        <input
                          onInput={(e) => {
                            setArea(e.target.value);
                          }}
                          type="text"
                          class="form-control"
                          id="inputAddressLine1"
                          name="address-line1"
                          placeholder="Address Line 1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div class="form-group col-md-6">
                      <label for="inputCityTown" class="c control-label">
                        City / Town
                      </label>
                      <div class="">
                        <input
                          onInput={(e) => {
                            setCity(e.target.value);
                          }}
                          type="text"
                          class="form-control"
                          id="inputCityTown"
                          name="city-town"
                          placeholder="City / Town"
                        />
                      </div>
                    </div>

                    <div class="form-group col-md-6">
                      <label
                        for="inputStateProvinceRegion"
                        class=" control-label"
                      >
                        State / Province / Region
                      </label>
                      <div class="">
                        <input
                          onInput={(e) => {
                            setState(e.target.value);
                          }}
                          type="text"
                          class="form-control"
                          id="inputStateProvinceRegion"
                          name="state-province-region"
                          placeholder="State / Province / Region"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-2">
                  <div class="form-group col-md-6">
                    <label
                      for="inputZipPostalCode"
                      class=" control-label"
                    >
                      Zip / Postal Code
                    </label>
                    <div class="">
                      <input
                        onInput={(e) => {
                          setPinCode(e.target.value);
                        }}
                        type="text"
                        class="form-control"
                        id="inputZipPostalCode"
                        name="zip-postal-code"
                        placeholder="Zip / Postal Code"
                      />
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="country" class=" control-label">
                      Country
                    </label>
                    <div class="">
                      <input
                        onInput={(e) => {
                          setCountry(e.target.value);
                        }}
                        type="text"
                        class="form-control"
                        id="country"
                        name="country_"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                  </div>
                </form>

                <div class="text-center ">
                  <div class="remove">
                    <Button
                    class="btn rounded-pill btn-sm px-3 add-address-button"
                      onClick={createNewAddress}
                      
                    >
                      <span className="">Add Address</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* <div className='col-md-5 align-self-center my-3 border border-secondary mx-2'>
      <h1>Second Half</h1>
    </div> */}
            </div>
          </div>
        </>
      ) : (
        <Link to={"/address"} className="btn btn-primary  a-btn-slide-text">
          <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
          <span>
            <strong>Login to View</strong>
          </span>
        </Link>
      )}
    </>
  );
};

export default Address;
