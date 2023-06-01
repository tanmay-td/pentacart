import React, { useState, useEffect } from "react";
import NavbarCustomer from "../NavbarCustomer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../../Components/ToasNotificationt";

const SelectAddress = (props) => {
  const [AddressList, setAddressList] = useState([]);
  const [show, setShow] = useState(false);
    const [msg, setmsg] = useState("");

  const [selectedAdd, setSelectedAdd] = useState();
  console.log(props.name._id)
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(
        "http://localhost:1234/address/getaddressbycustomer/" + props.name._id
      )
      .then((res) => {
        console.log(res.data);

        setAddressList(res.data);
      });
  }, [props]);

  function CreateOrder() {
    let product_array = [];
    let total = 0;
    props.value.map((value) => {
      const myobj = {
        product_id: value._id,
        quntity: value.quantity,
        order_status: "On the way",
      };
      total += value.price;
      product_array.push(myobj);
    });

    const myobj = {
      products: product_array,
      total_amount: total,
      customer_id: props.name._id,
      payment_id: "64103e380ba14bef5bdbf743",
      address_id: selectedAdd,
    };
    axios.post("http://localhost:1234/order/createorder", myobj).then((res) => {
      setTimeout(() => navigate("/order"), 1000);
      
    });
  }

  return (
    <div>
      <>
        <NavbarCustomer
          value={props.value}
          customerstatus={props.customerstatus}
          customerlogin={props.customerlogin}
          name={props.name}
        />
      </>
      <ToastNotification show ={show} setShow ={setShow} msg ={"Order Placed"} />


      {props.customerstatus ? (
        // write this css
        <div className="row w-50 text-center select-address-main-container  m-auto justify-content-center ">
          <div className="form-group col align-self-center">
            <label>SELECT ADDRESS</label>
            {AddressList[0] ? (
              <>
                <select
                  class="form-control"
                  onChange={(e) => setSelectedAdd(e.target.value)}
                >
                  {AddressList.map((value) => (
                    <option value={value._id}>{value.area}</option>
                  ))}
                </select>

                <Link
                  onClick={e=>{CreateOrder() 
                    setShow(true)
                  props.setCart([])}}
                  className="btn btn-primary a-btn-slide-text"
                >
                  <span
                    className="glyphicon glyphicon-edit"
                    aria-hidden="true"
                  ></span>
                  <span>
                    <strong>Deliver Here</strong>
                  </span>
                </Link>
              </>
            ) : (
              "Address List Not Loaded yet"
            )}
            <Link to={"/address"} className="btn btn-primary a-btn-slide-text">
              <span
                className="glyphicon glyphicon-edit"
                aria-hidden="true"
              ></span>
              <span>
                <strong>Add New Address</strong>
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <Link
          to={"/customerlogin"}
          className="btn btn-primary a-btn-slide-text"
        >
          <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
          <span>
            <strong>Login to View</strong>
          </span>
        </Link>
      )}
    </div>
  );
};

export default SelectAddress;
