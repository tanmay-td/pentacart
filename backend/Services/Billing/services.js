
const router = require('../../Controller/Billing/controller')
const mongoose = require('../../Database/db').Billing
const fun = require('../Billing/billing_method')



/**
 * @description Used To Get Billing Address By Id
 * @param {*} req 
 * @param {*} res 
 */


const GetBillingAddress = async (req,res) => {
    var id =req.params.id
    try {
        var result = await fun.getbillingAddress(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({"msg":error})
    }
    
}




/**
 *@description  Used To Create New Billing Address
 * @param {*} req 
 * @param {*} res 
 */


const CreateBillingAddress = async (req,res) => {
    var City = req.body.city
    var Region = req.body.region
    var Country = req.body.country
    var PostalCode = req.body.postalcode

    try {
        const result = await fun.createbillingAddress(City,Region,Country,PostalCode)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({"msg":error})
    }
   }
    
            

/**
 * @description Update Billing Address By ID
 * @param {*} req 
 * @param {*} res 
 */        


const UpdateBillingAddress = async (req,res) => {
    
    let id = req.params.id
    var City = req.body.city
    var Region = req.body.region
    var Country = req.body.country
    var PostalCode = req.body.postalcode
    
    try {
        const result = await fun.updatebillingAddressF(id,City,Region,Country,PostalCode)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({"msg":error})
    }
       
}
       
    
   


/**
 * @description Use To Delete Billing Address by id
 * @param {*} req 
 * @param {*} res 
 */



const DeleteBillingAddress = async (req,res) => {
    const Id = req.params.id
    
    try {
        const result = await fun.deletebillingAddress(Id)
        res.status(200).json(result2)
    } catch (error) {
        res.status(404).json({"msg":error})
    }
        
    
    }
       







module.exports = {GetBillingAddress,CreateBillingAddress,UpdateBillingAddress,DeleteBillingAddress};