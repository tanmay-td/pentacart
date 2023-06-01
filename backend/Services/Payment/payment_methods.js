var mongoose = require('../../Models/PaymentModels')


/**
 * 
 * @description Use to get Payment by Id  
 */   


const MgetPaymentbyId =  async (id) => {
    const result2 = await mongoose.find({_id:id})
     return result2
    }

/**
 * 
 * @description Use to Update Payment by Id  
 */   

const MupdatePaymentById =  async (id,payment_status) => {
    const obj = await mongoose.findById(id)
    const results2 = await obj.updateOne({payment_status:payment_status})
    return results2
    }


/**
 * 
 * @description Use to Create Payment 
 */   
    

const McreatePayment =  async (payment_type,transaction_id,payment_status,customer_id,order_id) => {
    const obj = await mongoose.create({payment_type:payment_type,transaction_id:transaction_id,payment_status:payment_status,customer_id:customer_id,order_id:order_id})
    return obj
    }

module.exports = {'GetPaymentById':MgetPaymentbyId,'UpdatePaymentById':MupdatePaymentById,'CreatePayment':McreatePayment}