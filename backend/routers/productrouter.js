const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { addProductController,fetchaddProducts,deleteProduct} = require("../controllers/productController");

router.post("/add-product", upload.single("image"), addProductController);
router.get('/fetchproducts',fetchaddProducts)
router.delete('/delete/:id',deleteProduct)

module.exports = router;
