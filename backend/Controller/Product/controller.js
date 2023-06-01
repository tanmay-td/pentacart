const express =  require('express')
var router = express.Router();
const Products_Services = require("../../Services/Product/services")



/**
 * @description Used To List Down All The Products
 */

router.get('/getallproducts',Products_Services.getAllProducts); 



/**
 * @description Used To List Down All The Products
 */

router.get('/searchproduct/:name',Products_Services.SearchProductByName); 


/**
 * @description Used to get Product by Id
 */

router.get('/getproductbyid/:id',Products_Services.getProductById);



/**
 * @description Used to get Product by category Id
 */

router.get('/getproductbycategory/:id',Products_Services.getProductByCategoryId);


/**
 * @description Used to get Product by category Id
 */

router.get('/getproductbybrand/:id',Products_Services.getProductByBrandId);


/**
 * @description Used to Create New Product
 */

router.post('/createproduct',Products_Services.createProduct);


/**
 * @description Use to Get Product by Category
 */

router.get('/getproductsbycategory/:name',Products_Services.getProductByCategory);


/**
 * @description Use To Update Product By Id
 */

router.put('/updateproductbyid/:id',Products_Services.updateProductById)

/**
 * @description Use to delete Product By Id
 */

router.delete('/deleteproductbyid/:id',Products_Services.deleteProductById)



module.exports = router;