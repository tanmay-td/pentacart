const express =  require('express')
var router = express.Router();
const Customer_Services = require("../../Services/Customer/services")



/**
 * @description Used To List Down All The Customer
 */

router.get('/getallcustomer',Customer_Services.getAllCustomer); 


/**
 * @description Used to get Customer by Id
 */

router.get('/getcustomerbyid/:id',Customer_Services.getCustomerById);




/**
 * @description Used to get Customer by Id
 */

router.get('/getcustomerbyemail/:email',Customer_Services.getCustomerByemail);



/**
 * @description Used to Create New Customer
 */

router.post('/createcustomer',Customer_Services.createCustomer);



/**
 * @description Use To Update Customer By Id
 */

router.put('/updatecustomerbyid/:id',Customer_Services.updateCustomerById)

/**
 * @description Use to delete Customer By Id
 */

router.delete('/deletecustomerbyid/:id',Customer_Services.deleteCustomerById)



module.exports = router;