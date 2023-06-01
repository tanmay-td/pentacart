var mongoose = require('../../Models/AddressModels')


/**
 * 
 * @description fetch Address Details with address id 
 * 
 */

const MgetAddressbyId =  async (id) => {
    const result2 = await mongoose.find({_id:id})
     return result2
    }



/**
 * 
 * @description fetch Address Details with customer id 
 * 
 */

const MgetAddressbyCustomer =  async (id) => {
    const result2 = await mongoose.find({customer_id:id})
     return result2
    }


/**
 * 
 * @description Update Address Details with address id 
 * 
 */


const MupdateAddressById =  async (id,pincode,houseno,area,city,state,country) => {
    const obj = await mongoose.findById(id)
    const results2 = await obj.updateOne({pincode:pincode,houseno:houseno,area:area,city:city,state:state,country:country})
    return results2
    }

/**
 * 
 * @description Delete Address Details with address id 
 * 
 */

    

const MdeleteAddressById =  async (id) => {
    const obj = await mongoose.findById(id)
    const result2 = await obj.remove() 
    return result2
    }


    /**
 * 
 * @description Create Address 
 * 
 */
    

const McreateAddress =  async (body) => {
    const obj = await mongoose.create(body)
    return obj
    }

module.exports = {'GetAddressById':MgetAddressbyId,'UpdateAddressById':MupdateAddressById,'DeleteAddressById':MdeleteAddressById,'CreateAddress':McreateAddress,"getAddressbyCustomer":MgetAddressbyCustomer }