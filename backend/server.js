
/**
 * @description Import of Controller
 */

const Billing = require("./Controller/Billing/controller");
const Product = require("./Controller/Product/controller");
const Customer = require("./Controller/Customer/controller");
const Address = require("./Controller/Address/controller");
const Category = require("./Controller/Category/controller");
const Payment = require("./Controller/Payment/controller");
const Order = require("./Controller/Order/controller");
const Cart = require("./Controller/Cart/controller");
const Brand  = require('./Controller/Brand/controller')
const Admin  = require('../backend/Controller/Admin/controller')



const cors = require("cors");
const express = require("express");


const bodyParser = require("body-parser");
let app = express();

/**
 * @description For interacting with front end
 */
app.use(cors());



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**
 * @description For routing to Billing 
 */
app.use("/billing", Billing);

app.use("/product", Product);

app.use("/customer", Customer);

app.use("/address", Address);

app.use("/category", Category);

app.use("/payment", Payment);

app.use("/order", Order);

app.use("/brand", Brand);

app.use("/cart", Cart);

app.use("/admin", Admin);


/**
 * @description Starting Server
 */

app.listen(1234, () => {
  console.log("GO to localhost:1234");
});
