const DBcon = require('../Database/db')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const  ObjectID = require('mongodb').ObjectId;



const ProductSchema = new mongoose.Schema(
    {
  
        category_id:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required: true
        
        },
        brand_id: {type:mongoose.Schema.Types.ObjectId,
            ref:"Brand",
            required: true
        },
        name: {type:mongoose.Schema.Types.String,
            required: true
        },
        desc:{type:mongoose.Schema.Types.String,
            
        },
        url:{type:mongoose.Schema.Types.String,
            required: true
        },
        price:{type:mongoose.Schema.Types.Number,
            required: true
        },
        instock:{type:mongoose.Schema.Types.Number,
            
        },
  
  
    }
  )

  const Product = mongoose.model('Product',ProductSchema)


  module.exports = Product