const express =  require('express')
var router = express.Router();
const Payment_Services = require("../../Services/Payment/services")






/**
 * @description Used to get Payment by Id
 */

router.get('/getpaymentbyid/:id',Payment_Services.getPaymentById);



/**
 * @description Used to Create New Payment
 */

router.post('/createpayment',Payment_Services.createPayment);



/**
 * @description Use To Update Payment By Id
 */

router.put('/updatepaymentbyid/:id',Payment_Services.updatePaymentById)






module.exports = router;