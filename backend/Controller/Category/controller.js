const express =  require('express')
var router = express.Router();
const Category_Services = require("../../Services/Category/services")



/**
 * @description Used To List Down All The Category
 */

router.get('/getallcategory',Category_Services.getAllCategory); 


/**
 * @description Used to get Category by Id
 */

router.get('/getcategorybyid/:id',Category_Services.getCategoryById);



/**
 * @description Used to Create New Category
 */

router.post('/createcategory',Category_Services.createCategory);



/**
 * @description Use To Update Category By Id
 */

router.put('/updatecategorybyid/:id',Category_Services.updateCategoryById)

/**
 * @description Use to delete Category By Id
 */

router.delete('/deletecategorybyid/:id',Category_Services.deleteCategoryById)



module.exports = router;