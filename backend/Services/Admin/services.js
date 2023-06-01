
const router = require('../../Controller/Admin/controller')
var fun = require('./admin_methods')






/**
 * @description Used To Get Brand By Brand Id
 * @param {*} req 
 * @param {*} res 
 */


const getadminbyemail = async (req,res) => {
    try {
        var id = req.params.id
        let result = await fun.GetAdminByEmail(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }
    
}




/**
 * @description Use To Create Brand by id
 * @param {*} req 
 * @param {*} res 
 */



const createAdmin = async (req,res) => {
    try {
        let result = await fun.CreateAdmin(req.body)
        
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg:"not working"})
    }

}




module.exports = {createAdmin,getadminbyemail};