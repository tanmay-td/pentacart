const mongoose = require('../../Models/BillingModels')


/**
 * 
 * @description fetch Billing Address Details with  id 
 * 
 */

const MGetBillingAddress =  async (id) => {
    const result2 = await mongoose.find({_id:id})
    return result2
}


/**
 * 
 * @description Create Billing Address 
 * 
 */

const MCreateBillingAddress =  async (City,Region,Country,PostalCode) => {
    const result2 = await mongoose.create({Billingcity:City,BillingRegion:Region,BillingCountry:Country,BillingPostalCode:PostalCode})
    return result2
}

/**
 * 
 * @description Update Billing Address Details with  id 
 * 
 */

const MUpdateBillingAddress =  async (id,City,Region,Country,PostalCode) => {
    console.log(id,City,Region,Country,PostalCode)
    const obj = await mongoose.findById(id)
    console.log("id working")
    const results2 = await obj.updateOne({Billingcity:City,BillingRegion:Region,BillingCountry:Country,BillingPostalCode:PostalCode})
    console.log("Update Working")
    return results2
}



/**
 * 
 * @description Delete Billing Address Details with  id 
 * 
 */

const MDeleteBillingAddress =  async (id) => {
    const obj = await mongoose.findById(id)
    const result2 = await obj.remove() 
    return result2
}



module.exports = {'getbillingAddress':MGetBillingAddress,"createbillingAddress":MCreateBillingAddress,

"updatebillingAddressF":MUpdateBillingAddress, "deletebillingAddress" : MDeleteBillingAddress }