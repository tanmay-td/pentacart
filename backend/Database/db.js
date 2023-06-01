
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const  ObjectID = require('mongodb').ObjectId;


/**
 * 
 * SCHEMA FOR CONNECTING TO DB
 * 
 */

const DBcon =  mongoose.connect('mongodb://localhost:27017/main_project',{useNewUrlParser:true,useUnifiedTopology:true}).then(
  () =>{
      console.log("connection done")
  }).catch((e) => console.log("no connection"))



// /**
//  * SCHEMA FOR CREATING COLLECTION
//  * 
//  */


//   const BillingSchema = new mongoose.Schema(
//     {
//         Billingcity:String,
//         BillingRegion:String,
//         BillingCountry:String,
//         BillingPostalCode:Number


//     }
// )

// const ProductSchema = new mongoose.Schema(
//   {

//       category_id:ObjectID,
//       name:String,
//       desc:String,
//       price:Number,
//       instock:Number,
//       brand:String


//   }
// )

// const CustomerSchema = new mongoose.Schema(
//   {

//       name:String,
//       phone:Number,
//       email:String,
//       password:String,
//       Address:ObjectID


//   })

// const AddressSchema = new mongoose.Schema(
//     {
  
//         pincode:Number,
//         houseno:Number,
//         area:String,
//         city:String,
//         state:String,
//         country:String,
//         Address:ObjectID
  
  
//     }


// )



// const OrderSchema = new mongoose.Schema(
// {
//   customer_id:ObjectID ,
//   product_id: ObjectID,
//   total_amount:Number,
//   order_date:Date,
//   order_status:String,
//   payment_id:ObjectID
// })



// const PaymentSchema = new mongoose.Schema(
//   {
//     payment_type:String ,
//     transaction_id: String,
//     payment_status:String,
//     customer_id:ObjectID,
//     order_id:ObjectID,

//   })

// const CategorySchema = new mongoose.Schema(
//   {
//     name:String ,
//     des: String
//   })



// /**
//  * 
//  * STUDENT COLLECTION
//  */
// const Category = mongoose.model('Category',CategorySchema)
// const Billing = mongoose.model('Billing',BillingSchema)
// const Product = mongoose.model('Product',ProductSchema)
// const Customer = mongoose.model('customer',CustomerSchema)
// const Address = mongoose.model('Address',AddressSchema)
// const Order = mongoose.model('Order',OrderSchema)
// const Payment = mongoose.model('Payment',PaymentSchema)

// /**
//  * TO CREATE NEW COLLECTION
//  * 
//  */

// // Category.createCollection().then(function(collection){
// //        console.log("collection Created")})

// // Customer.createCollection().then(function(collection){
// //         console.log("collection Created")})

// // Address.createCollection().then(function(collection){
// //           console.log("collection Created")})

// //           Order.createCollection().then(function(collection){
// //             console.log("collection Created")})
// //             Payment.createCollection().then(function(collection){
// //               console.log("collection Created")})




//   //  console.log("done")

//   // module.exports = {"Billing":Billing,"Product":Product,"Category":Category,

//   // "Customer":Customer ,"Address":Address,"Order":Order,"Payment":Payment   }; 


// const CartSchema = new mongoose.Schema(
//   {

//       products:[{product_id:ObjectID,quntity:Number}],
//       total:Number,
//       customer_id:ObjectID


//   }
// )

// const Cart = mongoose.model('Cart',CartSchema)



// Cart.createCollection().then(function(collection){
//           console.log("collection Created")})



//           const results =  async () => {
//             const result2 = await Cart.create({
             
//               "products": [{"product_id":"64002f4eb036035324174813","quntity":56},{"product_id":"64002f4eb036035324174813","quntity":56}],
//               "total": 6788,
//               "customer_id":"64002f4eb036035324174813"
//             })
//             }
           
//     results()




// const BrandSchema = new mongoose.Schema(
//   {
//     name:String ,
//     des: String
//   })


//   const Brand = mongoose.model('Brand',BrandSchema)

//   Brand.createCollection().then(function(collection){
//           console.log("collection Created")})



  module.exports = {'DBcon':DBcon}