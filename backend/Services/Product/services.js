const router = require("../../Controller/Product/controller");
var mongoose = require("../../Database/db").Product;
var fun = require("../Product/products_methods");
const category = require("../Category/category_methods");

/**
 * @description Used To List All The Products
 * @param {*} req
 * @param {*} res
 */

const getAllProducts = async (req, res) => {
  try {
    let result = await fun.GetAllProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};

/**
 * @description Used To Get Product By Product Id
 * @param {*} req
 * @param {*} res
 */

const getProductById = async (req, res) => {
  try {
    var id = req.params.id;
    let result = await fun.GetProductById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};


/**
 * @description Used To Get Product By Category Id
 * @param {*} req
 * @param {*} res
 */

const getProductByCategoryId = async (req, res) => {
  try {
    var id = req.params.id;
    let result = await fun.GetProductByCategoryID(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};



/**
 * @description Used To Get Product By Brand Id
 * @param {*} req
 * @param {*} res
 */

const getProductByBrandId = async (req, res) => {
  try {
    var id = req.params.id;
    let result = await fun.GetProductByBrandID(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};



/**
 *@description  Used To get Product By Category
 * @param {*} req
 * @param {*} res
 */

const getProductByCategory = async (req, res) => {
  try {
    var category_name = req.params.name;
    let result = await fun.GetProductByCategory(category_name);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};


/**
 *@description  Used To Update Product By Id
 * @param {*} req
 * @param {*} res
 */


const updateProductById = async (req, res) => {
  try {
    const id  = req.params.id
    let result = await fun.UpdateProductById(id,req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};

/**
 *@description  Used To Delete Product By Id
 * @param {*} req
 * @param {*} res
 */

const deleteProductById = async (req, res) => {
  try {
    var product_id = req.params.id;
    let result = await fun.DeleteProductById(product_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};


/**
 *@description  Used To Create Product By 
 * @param {*} req
 * @param {*} res
 */


const createProduct = async (req, res) => {
  try {
    

    let result = await fun.CreateProduct(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};


const SearchProductByName = async (req, res) => {
  try {
    var name = req.params.name;
    let result = await fun.SearchProduct(name);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ msg: "not working" });
  }
};



module.exports = {
  getAllProducts,
  getProductById,
  getProductByCategory,
  updateProductById,
  deleteProductById,
  createProduct,
  getProductByCategoryId,
  getProductByBrandId,
  SearchProductByName
};
