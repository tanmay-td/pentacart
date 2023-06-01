const DBcon = require('../Database/db')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)


const AdminSchema = new mongoose.Schema(
    {
      email:{type:mongoose.Schema.Types.String,
        required: true,
        unique:true
    } ,
      password: {type:mongoose.Schema.Types.String,
    }
    })


    const Admin = mongoose.model('Admin',AdminSchema)



    module.exports =  Admin