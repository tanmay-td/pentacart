
const router = require('../../Controller/Category/controller')
var fun = require('../Category/category_methods')



/**
 * @description Used To List All The Category
 * @param {*} req 
 * @param {*} res 
 */


const getAllCategory = async (req,res) => {
    
    try {
        let result = await fun.GetAllCategory()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


/**
 * @description Used To Get Category By Category Id
 * @param {*} req 
 * @param {*} res 
 */


const getCategoryById = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.GetCategoryById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}





const updateCategoryById = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.UpdateCategoryById(id,req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


            








/**
 * @description Use To Delete Category by id
 * @param {*} req 
 * @param {*} res 
 */



const deleteCategoryById = async (req,res) => {

    try {
        var category_id = req.params.id
        let result = await fun.DeleteCategoryById(category_id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
}




/**
 * @description Use To Create Category by id
 * @param {*} req 
 * @param {*} res 
 */



const createCategory = async (req,res) => {

    try {
      
        
        let result = await fun.CreateCategory(req.body)
        
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }

}




module.exports = {getAllCategory,createCategory,deleteCategoryById,updateCategoryById,getCategoryById};