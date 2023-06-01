const DBcon = require('../Database/db')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const  ObjectID = require('mongodb').ObjectId;



const CartSchema = new mongoose.Schema(
    {
  
        products:[{
            product_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product",
            require:true
        },
        quntity:{
            type: Number,
            required: true
        }
    }],

        total:{
            type :Number,
            required: true
        },
        customer_id:{type:mongoose.Schema.Types.ObjectId,
            ref:"customer",
            required: true
        }
  
    }

    
  )

  const Cart = mongoose.model('Cart',CartSchema)


  module.exports = Cart