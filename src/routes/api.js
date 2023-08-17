const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

// products end point
router.post("/createProduct", ProductController.createProduct);
router.get("/getProduct", ProductController.getProduct);
router.get("/singleProduct/:id", ProductController.singleProduct);
router.put("/updateProduct/:id", ProductController.updateProduct);
router.delete("/deleteProduct/:id", ProductController.deleteProduct);

module.exports = router;