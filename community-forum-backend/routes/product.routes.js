const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const fileUploader = require("../config/cloudinary.config");

router.post("/", fileUploader.single("image"), productController.createProduct);

router.get("/", productController.getAllProducts);

router.get("/city/:city", productController.getProductsByCity);

router.get("/:id", productController.getProductById);

router.get("/productowner/:productOwner", productController.getProductsByProductOwner);

router.get("/reservedproducts/:reservedById", productController.getProductsByUserReserved);

router.put("/", fileUploader.single("image"), productController.updateProduct);

router.put("/:id", productController.updateProduct);

router.delete("/", productController.deleteProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
