var mongoose = require('../../Models/CustomerModels')
var CategoryDb = require('../../Models/CategoryModels')



/**
 * 
 * @description Use to get all customer  
 */

const MgetAllCustomer =  async () => {
     const result2 = await mongoose.find({})
     console.log("working")
     return result2
    }


/**
 * 
 * @description Use to get customer by Id  
 */


const MgetCustomerbyId =  async (id) => {
    const result2 = await mongoose.find({_id:id})
     return result2
    }



/**
 * 
 * @description Use to get customer by Email  
 */


const MgetCustomerbyEmail =  async (email) => {
    const result2 = await mongoose.find({email:email})
     return result2
    }


 /**
 * 
 * @description Use to Update customer by Id  
 */   


const MupdateCustomerById =  async (id,name,phone,email,password,address) => {
    const obj = await mongoose.findById(id)
    const results2 = await obj.updateOne({name:name,phone:phone,email:email,password:password,Address:address})
    return results2
    }


/**
 * 
 * @description Use to Update customer by Id  
 */   
    

const MdeleteCustomerById =  async (id) => {
    const obj = await mongoose.findById(id)
    const result2 = await obj.remove() 
    return result2
    }


/**
 * 
 * @description Use to Create customer 
 */   
    

const McreateCustomer =  async (name,phone,email,password,address) => {
    const obj = await mongoose.create({name:name,phone:phone,email:email,password:password,Address:address})
    return obj
    }

module.exports = {'GetAllCustomer':MgetAllCustomer,'GetCustomerById':MgetCustomerbyId,'UpdateCustomerById':MupdateCustomerById,'DeleteCustomerById':MdeleteCustomerById,'CreateCustomer':McreateCustomer, 'getCustomerbyEmail':MgetCustomerbyEmail}