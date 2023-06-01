var mongoose = require('../../Models/CategoryModels')

/**
 * 
 * @description Use to get all category
 */

const MgetAllCategory =  async () => {
     const result2 = await mongoose.find({})
     console.log("working")
     return result2
    }

/**
 * 
 * @description Use to get category By Id
 */

const MgetCategorybyId =  async (id) => {
    const result2 = await mongoose.find({_id:id})
     return result2
    }


/**
 * 
 * @description Use to Update category By Id
 */


const MupdateCategoryById =  async (id,body) => {
    const obj = await mongoose.findById(id)
    const results2 = await obj.updateOne(body)
    return results2
    }


/**
 * 
 * @description Use to Delete category By Id
 */

const MdeleteCategoryById =  async (id) => {
    const obj = await mongoose.findById(id)
    const result2 = await obj.remove() 
    return result2
    }


/**
 * 
 * @description Use to Create category 
 */

const McreateCategory =  async (body) => {
    const obj = await mongoose.create(body)
    return obj
    }

module.exports = {'GetAllCategory':MgetAllCategory,'GetCategoryById':MgetCategorybyId,'UpdateCategoryById':MupdateCategoryById,'DeleteCategoryById':MdeleteCategoryById,'CreateCategory':McreateCategory}