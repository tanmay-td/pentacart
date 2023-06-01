
const router = require('../../Controller/Product/controller')
var fun = require('./address_methods')




/**
 * @description Used To Get Address By Address Id
 * @param {*} req 
 * @param {*} res 
 */


const getAddressById = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.GetAddressById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


/**
 * @description Used To Get Address By Address Id
 * @param {*} req 
 * @param {*} res 
 */


const getAddressByCustomer = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.getAddressbyCustomer(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}



/**
 * @description Used To Update Address By Address Id
 * @param {*} req 
 * @param {*} res 
 */




const updateAddressById = async (req,res) => {
    try {
        var id = req.params.id
        var pincode = req.body.pincode
        var houseno = req.body.houseno
        var area = req.body.area
        var city = req.body.city
        var state = req.body.state
        var country = req.body.country
        let result = await fun.UpdateAddressById(id,pincode,houseno,area,city,state,country)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


            



/**
 * @description Use To Delete Address by id
 * @param {*} req 
 * @param {*} res 
 */



const deleteAddressById = async (req,res) => {

    try {
        var Address_id = req.params.id
        let result = await fun.DeleteAddressById(Address_id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
}





/**
 * @description Use To Create Address 
 * @param {*} req 
 * @param {*} res 
 */



const createAddress = async (req,res) => {

    try {
        
        let result = await fun.CreateAddress(req.body)
        
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }

}




module.exports = {getAddressById,createAddress,updateAddressById,deleteAddressById,getAddressByCustomer};