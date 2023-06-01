const router = require("../../Controller/Cart/controller");
var fun = require("./cart_methods");

/**
 * @description Used To Get Cart By Cart Id
 * @param {*} req
 * @param {*} res
 */

const getCartById = async (req, res) => {
  try {
    var id = req.params.id;
    let result = await fun.GetCartById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};




/**
 * @description Used To Get All the Carts
 * @param {*} req
 * @param {*} res
 */

const getAllCart = async (req, res) => {
  try {
    let result = await fun.getAllCart();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};



/**
 * @description Used To Get Cart By Cart Id
 * @param {*} req
 * @param {*} res
 */

const getCartByCustomerId = async (req, res) => {
  try {
    var id = req.params.id;
    let result = await fun.getCartbyCusomerId(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};


/**
 * @description Used To Update Cart By Cart Id
 * @param {*} req
 * @param {*} res
 */

const updateCartById = async (req, res) => {
  try {
    var id = req.params.id;
    let result = await fun.UpdateCartById(id,req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};

/**
 * @description Use To Create New Cart
 * @param {*} req
 * @param {*} res
 */

const createCart = async (req, res) => {
  try {
    
    let result = await fun.CreateCart(req.body);
    
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};


/**
 * @description Used To Delete Cart By Cart Id
 * @param {*} req
 * @param {*} res
 */


const DeleteCart = async (req, res) => {
  try {
    var id = req.params.id;
    let result = await fun.DeleteCart(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};

module.exports = { getCartById, DeleteCart, createCart, updateCartById,getCartByCustomerId ,getAllCart};
