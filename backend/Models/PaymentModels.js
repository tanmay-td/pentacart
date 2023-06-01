const DBcon = require('../Database/db')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const  ObjectID = require('mongodb').ObjectId;


const PaymentSchema = new mongoose.Schema(
  {
    payment_type:{type:mongoose.Schema.Types.String,
      required: true,
  } ,
    transaction_id: {type:mongoose.Schema.Types.Number,
      required: true,
  },
    payment_status:{type:mongoose.Schema.Types.String,
      required: true,
  },
    customer_id:{type:mongoose.Schema.Types.ObjectId,
      ref:"customer"
  },

  })


const Payment = mongoose.model('Payment',PaymentSchema)

module.exports = Payment