const express =  require('express')
var router = express.Router();
const Cart_Services = require("../../Services/Cart/services")






/**
 * @description Used to get Cart by Id
 */

router.get('/getcartbyid/:id',Cart_Services.getCartById);




/**
 * @description Used to get Cart by Id
 */

router.get('/getallcarts',Cart_Services.getAllCart);


/**
 * @description Used to get Cart by Id
 */

router.get('/getcartbycustomerid/:id',Cart_Services.getCartByCustomerId);




/**
 * @description Used to Create New Cart
 */

router.post('/createcart',Cart_Services.createCart);



/**
 * @description Use To Update Cart By Id
 */

router.put('/updatecart/:id',Cart_Services.updateCartById)



/**
 * @description Use To Delete Cart By Id
 */


router.delete('/deletecart/:id',Cart_Services.DeleteCart)



module.exports = router;