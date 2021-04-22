const { createProduct,getProducts } = require("./product.controller");
const router = require("express").Router();

router.post("/",createProduct);
router.get("/",getProducts);
module.exports = router;