
const router = require('../../Controller/Payment/controller')
var fun = require('./payment_methods')





/**
 * @description Used To Get Payment By Payment Id
 * @param {*} req 
 * @param {*} res 
 */


const getPaymentById = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.GetPaymentById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}




/**
 * @description Used To Update Payment By Payment Id
 * @param {*} req 
 * @param {*} res 
 */




const updatePaymentById = async (req,res) => {
    try {
        var id = req.params.id
        var payment_status = req.body.payment_status
        let result = await fun.UpdatePaymentById(id,payment_status)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


            








/**
 * @description Use To Create Payment 
 * @param {*} req 
 * @param {*} res 
 */



const createPayment = async (req,res) => {

    try {
        var payment_type = req.body.payment_type
        var transaction_id = req.body.transaction_id
        var payment_status = req.body.payment_status
        var customer_id = req.body.customer_id
        var order_id = req.body.order_id

      
        
        let result = await fun.CreatePayment(payment_type,transaction_id,payment_status,customer_id,order_id)
        
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }

}




module.exports = {getPaymentById,createPayment,updatePaymentById};