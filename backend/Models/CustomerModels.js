const DBcon = require('../Database/db')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const  ObjectID = require('mongodb').ObjectId;



const CustomerSchema = new mongoose.Schema(
    {
  
        name:{type:mongoose.Schema.Types.String,
            required: true
        },
        phone:{type:mongoose.Schema.Types.Number,
            required: true,
        },
        email:{type:mongoose.Schema.Types.String,
            required: true,
            unique: true
        },
        password:{type:mongoose.Schema.Types.String,
            required: true,
        }
  
  
    })

const Customer = mongoose.model('customer',CustomerSchema)




module.exports = Customer