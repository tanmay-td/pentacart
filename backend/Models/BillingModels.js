const DBcon = require('../Database/db')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)



const BillingSchema = new mongoose.Schema(
    {
        Billingcity:{type:mongoose.Schema.Types.String,

        },
        BillingRegion:{type:mongoose.Schema.Types.String,
        },
        BillingCountry:{type:mongoose.Schema.Types.String,
            
        },
        BillingPostalCode:{type:mongoose.Schema.Types.Number,
        }


    })

const Billing = mongoose.model('Billing',BillingSchema)




module.exports = Billing