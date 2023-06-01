var mongoose = require('../../Models/OrderModels')



/**
 * 
 * @description Use to get order by id 
 */   

const MgetOrderbyId =  async (id) => {
    const result2 = await mongoose.find({_id:id})
     return result2
    }


    /**
 * 
 * @description Use to get All order 
 */   

const MgetAllOrder =  async () => {
    const result2 = await mongoose.find().populate("customer_id").populate("products.product_id")
     return result2
    }



/**
 * 
 * @description Use to get order by Customer
 */   

const MgetOrderbyCustomerId =  async (id) => {
    const result2 = await mongoose.find({customer_id:id}).populate("products.product_id")
     return result2
    }

/**
 * 
 * @description Use to update order by id 
 */   

const MupdateOrderById =  async (id,body) => {
    const obj = await mongoose.findById(id).updateOne(body)
    return obj
    }

/**
 * 
 * @description Use to Generate Date for Current Date
 */   

const getDate = async =>{
    var year = date.toLocaleString("default", { year: "numeric" });
    var month = date.toLocaleString("default", { month: "2-digit" });
    var day = date.toLocaleString("default", { day: "2-digit" });

    var formattedDate = day + "-" + month + "-" + year;

    return formattedDate
}

/**
 * 
 * @description Use to get Create Order 
 */   

const McreateOrder =  async (body) => {
    const obj = await mongoose.create(body)
    return obj
    }

module.exports = {'GetOrderById':MgetOrderbyId,'UpdateOrderById':MupdateOrderById,'CreateOrder':McreateOrder,'GetDate':getDate, "getOrderbyCustomerId":MgetOrderbyCustomerId ,"getAllOrder":MgetAllOrder}