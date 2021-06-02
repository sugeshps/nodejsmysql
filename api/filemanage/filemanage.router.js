const { checkFilemanage } = require("./filemanage.controller");
const router = require("express").Router();

router.post("/",checkFilemanage);
module.exports = router;