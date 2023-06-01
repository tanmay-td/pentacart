const express =  require('express')
var router = express.Router();
const Brand_Services = require('../../Services/Brand/services')



/**
 * @description Used To List Down All The Category
 */

router.get('/getallbrand',Brand_Services.getAllBrand); 


/**
 * @description Used to get Category by Id
 */

router.get('/getbrandbyid/:id',Brand_Services.getBrandById);



/**
 * @description Used to Create New Category
 */

router.post('/createbrand',Brand_Services.createBrand);



/**
 * @description Use To Update Category By Id
 */

router.put('/updatebrandbyid/:id',Brand_Services.updateBrandById)

/**
 * @description Use to delete Category By Id
 */

router.delete('/deletebrandbyid/:id',Brand_Services.deleteBrandById)



module.exports = router;