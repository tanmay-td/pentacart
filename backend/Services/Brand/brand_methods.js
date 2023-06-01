var mongoose = require('../../Models/BrandModels')



/**
 * 
 * @description Use to Get All Brands
 */

const MgetAllBrand =  async () => {
     const result2 = await mongoose.find({})
     console.log("working")
     return result2
    }

/**
 * 
 * @description Use to Get Brands By Id
 */

const MgetBrandbyId =  async (id) => {
    const result2 = await mongoose.find({_id:id})
     return result2
    }

    /**
 * 
 * @description Use to Update Brands By Id
 */

const MupdateBrandById =  async (id,body) => {
    const result = await mongoose.findByIdAndUpdate(id,body)
    return result
    }


/**
 * 
 * @description Use to Delete Brands By Id
 */

const MdeleteBrandById =  async (id) => {
    const result = await mongoose.findByIdAndDelete(id) 
    return result
    }


    

const McreateBrand =  async (body) => {
    const obj = await mongoose.create(body)
    return obj
    }

module.exports = {'GetAllBrand':MgetAllBrand,'GetBrandById':MgetBrandbyId,'UpdateBrandById':MupdateBrandById,'DeleteBrandById':MdeleteBrandById,'CreateBrand':McreateBrand}