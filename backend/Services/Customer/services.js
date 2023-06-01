
const router = require('../../Controller/Product/controller')
var mongoose = require('../../Database/db').Customer
var fun = require('../Customer/customer_methods')



/**
 * @description Used To List All The Customers
 * @param {*} req 
 * @param {*} res 
 */


const getAllCustomer = async (req,res) => {
    
    try {
        let result = await fun.GetAllCustomer()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


/**
 * @description Used To Get Customer By Customer Id
 * @param {*} req 
 * @param {*} res 
 */


const getCustomerById = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.GetCustomerById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}




/**
 * @description Used To Get Customer By Customer Id
 * @param {*} req 
 * @param {*} res 
 */


const getCustomerByemail = async (req,res) => {
    try {
        var email = req.params.email
        let result = await fun.getCustomerbyEmail(email)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}

/**
 * @description Used To Update Customer By Customer Id
 * @param {*} req 
 * @param {*} res 
 */




const updateCustomerById = async (req,res) => {
    try {
        var id = req.params.id
        var name = req.body.name
        var phone = req.body.phone
        var email = req.body.email
        var password = req.body.password
        var address = req.body.address
        let result = await fun.UpdateCustomerById(id,name,phone,email,password,address)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


            








/**
 * @description Use To Delete Customer by id
 * @param {*} req 
 * @param {*} res 
 */



const deleteCustomerById = async (req,res) => {

    try {
        var Customer_id = req.params.id
        let result = await fun.DeleteCustomerById(Customer_id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
}





/**
 * @description Use To Create Customer 
 * @param {*} req 
 * @param {*} res 
 */



const createCustomer = async (req,res) => {

    try {
        var name = req.body.name
        var phone = req.body.phone
        var email = req.body.email
        var password = req.body.password
        var address = req.body.address
        let result = await fun.CreateCustomer(name,phone,email,password,address)
        
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }

}




module.exports = {getAllCustomer,createCustomer,deleteCustomerById,updateCustomerById,getCustomerById,getAllCustomer,getCustomerByemail};