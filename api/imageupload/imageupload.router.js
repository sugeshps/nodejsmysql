const { createImage } = require("./imageupload.controller");
const router = require("express").Router();

router.post("/",createImage);
module.exports = router;