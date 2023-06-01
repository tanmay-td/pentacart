const express =  require('express')
var router = express.Router();
const services = require("../../Services/Billing/services")



/**
 * @description Used To Get Billing Address By Id
 */

router.get('/getbillingaddress/:id',services.GetBillingAddress); 


/**
 * @description Used To Create New Billing Address
 */

router.post('/createbillingaddress',services.CreateBillingAddress);


/**
 * @description Update Billing Address By ID
 */

router.put('/updatebillingaddress/:id',services.UpdateBillingAddress);


/**
 * @description Use To Delete Billing Address by id
 */

router.delete('/deletestudentbyid/:id',services.DeleteBillingAddress)




module.exports = router;