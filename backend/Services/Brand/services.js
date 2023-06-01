
const router = require('../../Controller/Brand/controller')
var fun = require('../Brand/brand_methods')



/**
 * @description Used To List All The Brand
 * @param {*} req 
 * @param {*} res 
 */


const getAllBrand = async (req,res) => {
    
    try {
        let result = await fun.GetAllBrand()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


/**
 * @description Used To Get Brand By Brand Id
 * @param {*} req 
 * @param {*} res 
 */


const getBrandById = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.GetBrandById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}

/**
 * @description Used To Update Brand By Brand Id
 * @param {*} req 
 * @param {*} res 
 */



const updateBrandById = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.UpdateBrandById(id,req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


            








/**
 * @description Use To Delete Brand by id
 * @param {*} req 
 * @param {*} res 
 */



const deleteBrandById = async (req,res) => {

    try {
        var Brand_id = req.params.id
        let result = await fun.DeleteBrandById(Brand_id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
}




/**
 * @description Use To Create Brand by id
 * @param {*} req 
 * @param {*} res 
 */



const createBrand = async (req,res) => {
    try {
        let result = await fun.CreateBrand(req.body)
        
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }

}




module.exports = {getAllBrand,createBrand,deleteBrandById,updateBrandById,getBrandById};