var mongoose = require('../../Models/AdminModels')





/**
 * 
 * @description Use to Get Brands By Id
 */

const MgetAdminbyemail =  async (id) => {
    const result2 = await mongoose.find({email:id})
     return result2
    }


    

const McreateAdmin =  async (body) => {
    const obj = await mongoose.create(body)
    return obj
    }

module.exports = {'GetAdminByEmail':MgetAdminbyemail,'CreateAdmin':McreateAdmin}