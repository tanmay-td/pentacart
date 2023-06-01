const express =  require('express')
var router = express.Router();
const Admin_services = require("../../Services/Admin/services")



/**
 * @description Used To Get Billing Address By Id
 */

router.get('/getadminbyemail/:id',Admin_services.getadminbyemail); 


/**
 * @description Used To Create New Billing Address
 */

router.post('/createadmin',Admin_services.createAdmin);







module.exports = router;