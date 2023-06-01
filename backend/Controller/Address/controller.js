const express =  require('express')
var router = express.Router();
const Address_Services = require("../../Services/Address/services")





/**
 * @description Used to get Address by Id
 */

router.get('/getaddressbyid/:id',Address_Services.getAddressById);



/**
 * @description Used to get Address by Customer Id
 */

router.get('/getaddressbycustomer/:id',Address_Services.getAddressByCustomer);




/**
 * @description Used to Create New Address
 */

router.post('/createaddress',Address_Services.createAddress);



/**
 * @description Use To Update Address By Id
 */

router.put('/updateaddressbyid/:id',Address_Services.updateAddressById)

/**
 * @description Use to delete Address By Id
 */

router.delete('/deleteaddressbyid/:id',Address_Services.deleteAddressById)



module.exports = router;