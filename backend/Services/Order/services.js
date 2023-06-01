
const router = require('../../Controller/Payment/controller')
var fun = require('../../Services/Order/order_methods')



/**
 * @description Used To Get  All Order 
 * @param {*} req 
 * @param {*} res 
 */


const getAllOrder = async (req,res) => {
    try {
        let result = await fun.getAllOrder()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
}






/**
 * @description Used To Get Order By Order Id
 * @param {*} req 
 * @param {*} res 
 */


const getOrderById = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.GetOrderById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
}




/**
 * @description Used To Get Order By Customer Id
 * @param {*} req 
 * @param {*} res 
 */


const getOrderByCustomerId = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.getOrderbyCustomerId(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}




/**
 * @description Used To Update Order By Order Id
 * @param {*} req 
 * @param {*} res 
 */




const updateOrderById = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.UpdateOrderById(id,req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}


        


/**
 * @description Use To Create Order 
 * @param {*} req 
 * @param {*} res 
 */



const createOrder = async (req,res) => {

    try {
        let result = await fun.CreateOrder(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }

}




module.exports = {getOrderById,createOrder,updateOrderById,getOrderByCustomerId,getAllOrder};