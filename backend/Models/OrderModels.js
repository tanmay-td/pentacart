const DBcon = require('../Database/db')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const  ObjectID = require('mongodb').ObjectId;


const OrderSchema = new mongoose.Schema(
{
  customer_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"customer"
} ,
products:[{
  product_id:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"Product",
  require:true
},
quntity:{
  type: Number,
  required: true
},
order_status:{type:mongoose.Schema.Types.String,
  required: true,
}

}],
  total_amount:{type:mongoose.Schema.Types.Number,
    required: true,
},
  payment_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"Payment"
},
address_id:{type:mongoose.Schema.Types.ObjectId,
  ref:"Address"
}

},
{
  timestamps: true
}


)


const Order = mongoose.model('Order',OrderSchema)

module.exports = Order