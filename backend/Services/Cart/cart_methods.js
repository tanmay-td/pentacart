var mongoose = require('../../Models/CartModels')


/**
 * 
 * @description Use to get cart By Id
 */


const MgetCartbyId =  async (id) => {
    const result2 = await mongoose.find({_id:id})
     return result2
    }


/**
 * 
 * @description Use to get All the Carts
 */


const MgetAllCart =  async () => {
    const result2 = await mongoose.find().populate("customer_id").populate("products.product_id")
     return result2
    }


/**
 * 
 * @description Use to get cart By Id
 */


const MgetCartbyCusomerId =  async (id) => {
    const result2 = await mongoose.find({customer_id:id})
     return result2
    }

    /**
 * 
 * @description Use to update cart By Id
 */

const MupdateCartById =  async (id,body) => {
    console.log(id,body)
    const obj = await mongoose.find({customer_id:id}).updateOne(body)
    return obj
    }



/**
 * 
 * @description Use to create cart 
 */ 

const McreateCart =  async (body) => {
    console.log(body)
    const obj = await mongoose.create(body)
    return obj
    }

/**
 * 
 * @description Use to Delete cart By Id
 */

const MdeleteCart =  async (id) => {
    const obj = await mongoose.findById(id)
    const result2 = await obj.remove() 
    return result2
        }


module.exports = {'GetCartById':MgetCartbyId,'UpdateCartById':MupdateCartById,'CreateCart':McreateCart,'DeleteCart':MdeleteCart ,'getCartbyCusomerId':MgetCartbyCusomerId ,"getAllCart" :MgetAllCart}