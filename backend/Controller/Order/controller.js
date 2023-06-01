const express =  require('express')
var router = express.Router();
const Order_Services = require("../../Services/Order/services")






/**
 * @description Used to get All Order 
 */

router.get('/getallorder',Order_Services.getAllOrder);



/**
 * @description Used to get Order by Id
 */

router.get('/getorderbyid/:id',Order_Services.getOrderById);



/**
 * @description Used to get Order by Id
 */

router.get('/getorderbycustomer/:id',Order_Services.getOrderByCustomerId);



/**
 * @description Used to Create New Order
 */

router.post('/createorder',Order_Services.createOrder);



/**
 * @description Use To Update Order By Id
 */

router.put('/updateordertbyid/:id',Order_Services.updateOrderById)










module.exports = router;