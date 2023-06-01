var mongoose = require('../../Models/ProductModels')
var CategoryDb = require('../../Models/CategoryModels')


/**
 * 
 * @description Use to get All Product 
 */   



const MgetAllProducts =  async () => {
     const result2 = await mongoose.find({}).populate('category_id').populate('brand_id');
     return result2
    }


/**
 * 
 * @description Use to get  Product id 
 */   

const MgetProductbyId =  async (id) => {
    const result2 = await mongoose.find({_id:id}).populate('category_id').populate('brand_id')
     return result2
    }

/**
 * 
 * @description Use to get  Product by category ID 
 */   

const MgetProductbyCategoryId =  async (id) => {
    const result2 = await mongoose.find({category_id:id}).populate('category_id').populate('brand_id')
     return result2
    }


/**
 * 
 * @description Use to get  Product by Brand ID 
 */   

const MgetProductbyBrandId =  async (id) => {
    const result2 = await mongoose.find({brand_id:id}).populate('category_id').populate('brand_id')
     return result2
    }



/**
 * 
 * @description Use to get  Product By Category 
 */   


const MgetProductByCategory =  async (Category) => {
    const result1 = await CategoryDb.find({name:Category})
    const result2 = await mongoose.find({category_id:result1[0]._id})
    return result2
    }


/**
 * 
 * @description Use to Update  Product By Id 
 */       

const MupdateProductById =  async (id,body) => {
    const obj = await mongoose.findById(id)
    const results2 = await obj.updateOne(body)
    return results2
    }


/**
 * 
 * @description Use to Delete  Product By Id 
 */       


const MdeleteProductById =  async (id) => {
    const obj = await mongoose.findById(id)
    const result2 = await obj.remove() 
    return result2
    }


/**
 * 
 * @description Use to Create  Product 
 */       


const McreateProduct =  async (body) => {
    const obj = await mongoose.create(body)
    return obj
    }


/**
 * 
 * @description Use to Search Product By Name 
 */       
    

const MsearchProduct =  async (name) => {
        const obj = await mongoose.find({name:{$regex:name}})
        return obj
        }



module.exports = {'GetAllProducts':MgetAllProducts,'GetProductById':MgetProductbyId,'GetProductByCategory':MgetProductByCategory,'UpdateProductById':MupdateProductById,'DeleteProductById':MdeleteProductById,'CreateProduct':McreateProduct,"GetProductByCategoryID":MgetProductbyCategoryId,"GetProductByBrandID":MgetProductbyBrandId,
"SearchProduct" :MsearchProduct
}