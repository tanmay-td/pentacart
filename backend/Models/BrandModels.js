const DBcon = require('../Database/db')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)


const BrandSchema = new mongoose.Schema(
    {
      name:{type:mongoose.Schema.Types.String,
        required: true
    } ,
      des: {type:mongoose.Schema.Types.String,
    },
      url:{type:mongoose.Schema.Types.String,
        required: true
    }
    })


    const Brand = mongoose.model('Brand',BrandSchema)



    module.exports =  Brand