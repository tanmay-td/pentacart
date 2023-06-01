const DBcon = require('../Database/db')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const  ObjectID = require('mongodb').ObjectId;


const AddressSchema = new mongoose.Schema(
    {
  
        pincode:{type:mongoose.Schema.Types.Number,
            
        },
        houseno:{type:mongoose.Schema.Types.Number,
            
        },
        area:{type:mongoose.Schema.Types.String,
            
        },
        city:{type:mongoose.Schema.Types.String,
            
        },
        state:{type:mongoose.Schema.Types.String,
            
        },
        country:{type:mongoose.Schema.Types.String,
            
        },
        customer_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"customer"

        }
  
  
    }


)

const Address = mongoose.model('Address',AddressSchema)

module.exports = Address