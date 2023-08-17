const { isValidObjectId } = require("mongoose");
const ProductModel = require('../models/ProductModel')

// create a product
module.exports.createProduct = async (req, res) => {
    try {
      const reqBody = req.body;
      const result = await ProductModel.create(reqBody);
      res.status(200).send({ status: "ok", data: result });
    } catch (error) {
      res.status(500).send({ status: "fail", message: error.message });
    }
  };


// read a product
module.exports.singleProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const projection =
        "productName productCode img unitPrice quantity totalPrice";
      const result = await ProductModel.findById(id, projection);
      return res.status(200).send({ status: "ok", data: result });
    } catch (error) {
      return res.status(500).send({ status: "fail", message: error.message });
    }
  };


  // get all product

  module.exports.getProduct = async (req, res) => {
    try {
      const filter = {};
      const projection =
        "productName productCode img unitPrice quantity totalPrice";
      const result = await ProductModel.find(filter, projection);
      return res.status(200).send({ status: "ok", data: result });
    } catch (error) {
      return res.status(500).send({ status: "fail", message: error.message });
    }
  };


// delete single product
module.exports.deleteProduct = async (req, res) => {
    try {
      const id = req.params.id;
      // checking id exits or not
      if (!id) {
        return res
          .status(400)
          .send({ status: "fail", message: "product id missing" });
      }
  
      // mongoose id is valid or not
      if (!isValidObjectId(id)) {
        return res
          .status(400)
          .send({ status: "fail", message: "invalid mongoose id" });
      }
      // success response
      const result = await ProductModel.findByIdAndRemove(id);
  
      if (!result) {
        return res
          .status(200)
          .send({ status: "ok", message: "product id not found" });
      }
      // every think is ok and now delete product
      res.status(200).send({ status: "ok", message: "delete successfully" });
    } catch (error) {
      res.status(500).send({ status: "fail", message: error.message });
    }
  };


// update single product
module.exports.updateProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const reqBody = req.body;
      // checking id exits or not
      if (!id) {
        return res
          .status(400)
          .send({ status: "fail", message: "product id missing" });
      }
  
      // mongoose id is valid or not
      if (!isValidObjectId(id)) {
        return res
          .status(400)
          .send({ status: "fail", message: "invalid mongoose id" });
      }
      //  update operation
      const result = await ProductModel.findByIdAndUpdate(id, reqBody, {
        new: true,
        runValidators: true,
      });
  
      if (result) {
        return res.status(200).send({ status: "ok", data: result });
      } else {
        return res
          .status(400)
          .send({ status: "fail", message: "product id not found" });
      }
    } catch (error) {
      res.status(500).send({ status: "fail", message: error.message });
    }
  };